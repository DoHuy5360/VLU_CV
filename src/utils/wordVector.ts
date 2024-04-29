type LetterMapIndexType = { [key: string]: number };
const lettersMapIndex: LetterMapIndexType = {
	a: 1,
	b: 2,
	c: 3,
	d: 4,
	e: 5,
	f: 6,
	g: 7,
	h: 8,
	i: 9,
	j: 10,
	k: 11,
	l: 12,
	m: 13,
	n: 14,
	o: 15,
	p: 16,
	q: 17,
	r: 18,
	s: 19,
	t: 20,
	u: 21,
	v: 22,
	w: 23,
	x: 24,
	y: 25,
	z: 26,
	A: 27,
	B: 28,
	C: 29,
	D: 30,
	E: 31,
	F: 32,
	G: 33,
	H: 34,
	I: 35,
	J: 36,
	K: 37,
	L: 38,
	M: 39,
	N: 40,
	O: 41,
	P: 42,
	Q: 43,
	R: 44,
	S: 45,
	T: 46,
	U: 47,
	V: 48,
	W: 49,
	X: 50,
	Y: 51,
	Z: 52,
};


export class CosineSimilarity {
	private str01;
	str02: string;
	private str01Cleaned;
	str02Cleaned: string;
	private arrStr01;
	arrStr02;
	arrStrMerged;
	arrayWords: string[];
	private dictionary: Set<string>;
	private vector1;
	vector2: number[];
	private v1Magnitude;
	v2Magnitude;
	dotProduct;
	similarity: number;
	constructor(str01: string, str02: string) {
		this.str01 = str01;
		this.str02 = str02;
		this.str01Cleaned = this.str01.toLowerCase().replace(/\.|,|-/g, " ");
		this.str02Cleaned = this.str02.toLowerCase().replace(/\.|,|-/g, " ");
		this.arrStr01 = this.str01Cleaned.trim().split(" ");
		this.arrStr02 = this.str02Cleaned.trim().split(" ");
		this.arrStrMerged = this.arrStr01.concat(this.arrStr02);
		this.dictionary = new Set(this.arrStrMerged);
		this.arrayWords = [...this.dictionary.values()];
		// Tạo vector
		this.vector1 = this.arrayWords.map((word) => (this.arrStr01.includes(word) ? 1 : 0));
		this.vector2 = this.arrayWords.map((word) => (this.arrStr02.includes(word) ? 1 : 0));

		// Tính độ dài của v1, v2
		this.v1Magnitude = Math.sqrt(
			this.vector1.reduce((sum: number, value) => {
				return sum + Math.pow(value, 2);
			}, 0)
		);

		this.v2Magnitude = Math.sqrt(
			this.vector2.reduce((sum: number, value) => {
				return sum + Math.pow(value, 2);
			}, 0)
		);

		// Tính tích vô hướng của v1 và v2
		this.dotProduct = this.vector1.reduce((sum: number, value, index) => {
			return sum + value * this.vector2[index];
		}, 0);

		// Tính cosine similarity
		this.similarity = this.dotProduct / (this.v1Magnitude * this.v2Magnitude);
	}
	getSimilarity(fixed: number = 2){
		return this.similarity.toFixed(fixed)
	}
}

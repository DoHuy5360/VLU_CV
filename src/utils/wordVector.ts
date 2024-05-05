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

export class TextVector {
	public text: string;
	public cleanedText: string;
	private arrayWords: string[];
	private vector?: number[];
	constructor(text: string) {
		this.text = text;
		this.cleanedText = this.text.toLowerCase().replace(/\.|,|-/g, " ");
		this.arrayWords = this.cleanedText.trim().split(" ");
	}
	getArrayWords() {
		return this.arrayWords;
	}
	setVector(arrBagOfWords: string[]) {
		this.vector = arrBagOfWords.map((word) => (this.getArrayWords().includes(word) ? 1 : 0));
	}
	getVector() {
		return this.vector;
	}
	getVectorLength() {
		// Tính chiều dài vector
		if (this.vector === undefined) {
			console.log("Missing vector");
			return;
		}
		return Math.sqrt(
			this.vector.reduce((sum, value) => {
				return sum + Math.pow(value, 2);
			}, 0)
		);
	}
}
export class CosineSimilarity {
	private first: TextVector;
	private second: TextVector;
	private mergedWords: string[];
	private setBagOfWords: Set<string>;
	private arrBagOfWords: string[];
	private similarity?: number;
	private dotProduct?: number;
	constructor(first: TextVector, second: TextVector) {
		this.first = first;
		this.second = second;
		this.mergedWords = this.first.getArrayWords().concat(this.second.getArrayWords());
		this.setBagOfWords = new Set(this.mergedWords);
		this.arrBagOfWords = [...this.setBagOfWords.values()];
		this.first.setVector(this.arrBagOfWords);
		this.second.setVector(this.arrBagOfWords);
	}
	getSimilarity(fixed: number = 2) {
		// Tính tích vô hướng của v1 và v2
		this.dotProduct = this.first.getVector()?.reduce((sum, value, index) => {
			return sum + value * this.second.getVector()![index];
		}, 0) as number;

		// Tính cosine similarity
		const firstVectorLength = this.first.getVectorLength() as number;
		const secondVectorLength = this.second.getVectorLength() as number;
		this.similarity = this.dotProduct / (firstVectorLength * secondVectorLength);

		return parseFloat(this.similarity?.toFixed(fixed));
	}
}

// const f1 = new TextVector("Hell 2");
// const f2 = new TextVector("Hell 2");
// const c = new CosineSimilarity(f1, f2);

// console.log(c.getSimilarity(2));

class TextVector {
	constructor(text) {
		this.text = text;
		this.cleanedText = this.text.toLowerCase().replace(/\.|,|-/g, " ");
		this.arrayWords = this.cleanedText.trim().split(" ");
	}
	getArrayWords() {
		return this.arrayWords;
	}
	setVector(arrBagOfWords) {
		this.vector = arrBagOfWords.map((word) => (this.getArrayWords().includes(word) ? 1 : 0));
	}
	getVector() {
		return this.vector;
	}
	getVectorLength() {
		// Tính chiều dài vector
		return Math.sqrt(
			this.vector.reduce((sum, value) => {
				return sum + Math.pow(value, 2);
			}, 0)
		);
	}
}
class CosineSimilarity {
	constructor(first, second) {
		this.first = first;
		this.second = second;
		this.mergedWords = this.first.getArrayWords().concat(this.second.getArrayWords());
		this.setBagOfWords = new Set(this.mergedWords);
		this.arrBagOfWords = [...this.setBagOfWords.values()];
		this.first.setVector(this.arrBagOfWords);
		this.second.setVector(this.arrBagOfWords);
	}
	getSimilarity(fixed) {
		// Tính tích vô hướng của v1 và v2
		this.dotProduct = this.first.getVector().reduce((sum, value, index) => {
			return sum + value * this.second.getVector()[index];
		}, 0);

		// Tính cosine similarity
		this.similarity = this.dotProduct / (this.first.getVectorLength() * this.second.getVectorLength());

		return this.similarity.toFixed(fixed);
	}
}

const f1 = new TextVector("Hell 2");
const f2 = new TextVector("Hell 2");
const c = new CosineSimilarity(f1, f2);

console.log(c.getSimilarity(2));

export function randomInRange(x: number, y: number): number {
	return Math.floor(Math.random() * (y - x + 1)) + x;
}

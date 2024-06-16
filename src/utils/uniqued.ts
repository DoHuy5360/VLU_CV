import crypto from "crypto";

export class Unique {
	private constructor() {}
	static getString(): string {
		return `${new Date().getTime()}_${crypto.randomBytes(32).toString("hex")}`;
	}
}

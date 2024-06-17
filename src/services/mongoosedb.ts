import Company from "@/models/company";
import mongoose, { Mongoose } from "mongoose";

type Cached = {
	conn: Mongoose | null;
	promise: Promise<Mongoose> | null;
};

declare global {
	namespace NodeJS {
		interface Global {
			mongoose: Cached;
		}
	}
}

let cached: Cached = (global as any).mongoose || {
	conn: null,
	promise: null,
};

export async function connectToDatabase() {
	if (cached.conn) {
		return cached.conn;
	}

	if (!cached.promise) {
		const opts = {
			bufferCommands: false,
		};

		cached.promise = mongoose.connect(process.env.MONGODB_URI as string, opts).then((mongoose) => {
			return mongoose;
		});
	}
	cached.conn = await cached.promise;
	console.log("DB connected");
	Company;
	return cached.conn;
}
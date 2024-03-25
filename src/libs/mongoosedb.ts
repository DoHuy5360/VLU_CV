import mongoose from "mongoose";

let cachedConnection: typeof mongoose;

export async function connectToDatabase() {
	if (cachedConnection) {
		return cachedConnection;
	}

	try {
		const connection = await mongoose.connect(
			process.env.MONGODB_URI as string
		);

		cachedConnection = connection;
		console.log("Connect to MongoDB");
		return connection;
	} catch (error) {
		console.error("Error connecting to MongoDB:", error);
		throw error;
	}
}

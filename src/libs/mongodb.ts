import { Db, MongoClient } from "mongodb";
import "dotenv/config";
// Connection URL
const url = process.env.MONGODB_DRIVER as string;
const client = new MongoClient(url);

// Database Name
const dbName = "graduate-thesis";

export class Database {
	public connection!: Db;
	constructor() {}
	async connectDB(): Promise<Db> {
		// Use connect method to connect to the server
		await client.connect();
		console.log("Connected successfully to server");
		const db = client.db(dbName);
		const collection = db.collection("documents");

		// the following code examples can be pasted here...

		return db;
	}
}

// main()
// 	.then(console.log)
// 	.catch(console.error)
// 	.finally(() => client.close());

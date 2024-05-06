import {MongoClient} from "mongodb";

export type User = {
    name: string;
    email: string;
    password: string;
}

export async function insert(user: User) {
    const uri = process.env.MONGO_DB_URI ?? ""
    const client = new MongoClient(uri)

    try {
        await client.connect();
        const db =  client.db('open-api')
        const collection =  db.collection('users')
        const result = await collection.insertOne({})
        console.log(result.insertedId)
        return result.insertedId
    }catch (error){
        console.error(error);
    }finally {
        await client.close()
    }
}
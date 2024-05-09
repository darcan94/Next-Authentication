import {MongoClient, ObjectId} from "mongodb";

export type User = {
    _id?: ObjectId
    name: string;
    email: string;
    password: string;
}

export async function insertUser(user: User) {
    const uri = process.env.MONGO_DB_URI ?? ""
    const database = process.env.DB_NAME
    const client = new MongoClient(uri)

    try {
        await client.connect();
        const db =  client.db(database)
        const collection =  db.collection('users')
        const result = await collection.insertOne(user)
        console.log(result.insertedId)
        return result.insertedId
    }catch (error){
        console.error(error);
    }finally {
        await client.close()
    }
}

export async function getUser(email: string) {
    const uri = process.env.MONGO_DB_URI ?? ""
    const database = process.env.DB_NAME
    const client = new MongoClient(uri)

    try {
        await client.connect();
        const db =  client.db(database)
        const collection =  db.collection('users')
        const user = await collection.findOne({email: email})
        return user as User
    }catch (error){
        console.error(error);
    }finally {
        await client.close()
    }
}
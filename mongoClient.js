import { MongoClient } from "mongodb";
import dotenv from "dotenv"
dotenv.config();

const uri = process.env.CONNECTION_STRING; 
const client = new MongoClient(uri);

export default client
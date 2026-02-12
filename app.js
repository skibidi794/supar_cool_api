import express from "express";
import cors from "cors";
import client from "./mongoClient.js";

const db = client.db("messages");
const messages = db.collection("message");

const app = express();  
const port = 3000;

app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res.send("hello world");
})

app.post("/send_message", async (req, res) => {
  const { text } = req.body;
  await messages.insertOne({text})
  res.end();
})

app.get("/messages", async (req, res) => {
  try {
    const documents = await messages.find({}).toArray();
    res.json(documents);
  } catch (err) {
    console.error(err);
  }
})



app.listen(port, () => {
  console.log("Server up and running on port " + port);
})
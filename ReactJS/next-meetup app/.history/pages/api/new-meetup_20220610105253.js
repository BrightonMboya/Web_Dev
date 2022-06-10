import { MongoClient } from "mongodb";

// /api/new-meetup

function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const { title, image, address, description } = data;

    MongoClient.connect(
      "mongodb+srv://tony:tonybm321@todo.f7ruh.mongodb.net/?retryWrites=true&w=majority"
    );
  }
}

export default handler;

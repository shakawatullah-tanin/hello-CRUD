const express = require("express");

const { MongoClient, ServerApiVersion } = require("mongodb");

const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const port = process.env.PORT || 5006;

// tanin
// password fgWeVv1XfTHHy1Iv

const uri =
  "mongodb+srv://tanin:fgWeVv1XfTHHy1Iv@cluster0.vivw2nj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    //make client connect

    await client.connect();

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    const database = client.db("usersdb");

    const usersCollections = database.collection("users");

    app.get("/users", async (req, res) => {
      try {
        const cursor = await usersCollections.find({});

        const users = await cursor.toArray();

        const data = {
          users,
          message: "okey , successfully get all users",
        };

        return res.send({ data });
      } catch (e) {
        return res.send({
          message : e.message
        })
      }
    });
    app.post("/users", async (req, res) => {
      const newUser = req.body;

      const result = await usersCollections.insertOne(newUser);

      console.log(newUser);

      res.send(newUser);
    });
  } catch {
  } finally {
  }
}

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello Crud");
});

app.listen(port, () => {
  console.log("simple Crud server running on:", port);
});

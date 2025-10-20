const express = require("express")

const {MongoClient,ServerApiVersion}=require('mongodb');
const app = express()

const port = process.env.PORT || 5006


// tanin
// password fgWeVv1XfTHHy1Iv



const uri = "mongodb+srv://tanin:fgWeVv1XfTHHy1Iv@cluster0.vivw2nj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


async function run() {

    try{

        //make client connect 

        await client.connect() 

        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");

    }
    catch{

    }

    finally{
        

    }
    
}

run().catch(console.dir)

app.get("/",(req,res)=>{

    res.send("Hello Crud")

})


app.listen(port,()=>{

    console.log("simple Crud server running on:",port)
})



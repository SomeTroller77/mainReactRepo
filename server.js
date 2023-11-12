const express = require('express');
const mongodburi = "mongodb+srv://sakshammongodbtest:deAUunDX6BNqGtRO@cluster0.ubpfces.mongodb.net/?retryWrites=true&w=majority"
const {MongoClient} = require("mongodb")
const client = new MongoClient(mongodburi);
const server = express();
const port = 8080
server.listen(port, function(){
    console.log(`listening on port ${port}`);
});
server.get("/getBrandList", async function(req, res){
    try{
        await client.connect();
        console.log('connected')
        const db = await client.db("test");
        const collection = await db.collection("brands");
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.json(await collection.find({}).toArray());
    }catch(e){
        console.log(e);
    }
});
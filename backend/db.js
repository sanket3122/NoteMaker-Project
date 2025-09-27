const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/iNotebook";
// const mongoURI = "mongodb+srv://sanketbendale25:fkDs7iPlBvtnXIIj@cluster0.rumcmgj.mongodb.net/iNotebook?retryWrites=true&w=majority&appName=Cluster0";

// mongodb://localhost:27017/
// const connectToMongo=()=>{
//     mongoose.connect(mongoURI).then(()=>console.log("connected to mongo succesfully")).catch((e)=>console.log(e.message))
//     // mongoose.connect(mongoURI,()=>{
//     //     console.log("connected to mongo succesfully");
//     // })
// }

async function connectToMongo() {
    await mongoose.connect(mongoURI).then(()=> console.log("Connected to Mongo Successfully")).catch(err => console.log(err));
  }
  
module.exports = connectToMongo;
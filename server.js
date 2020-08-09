const express=require("express") ;
//const mongoose=require('mangoose');
const {MONGODB_URL,PORT}=require("./Config") //importing file from config/index
const app=express();
const {connect}=require("mongoose");

//connect to database
connect(MONGODB_URL,{useNewUrlParser:true,useUnifiedTopology:true},
    (err)=>{
        if(err) throw err;
        console.log("database connected");
    }  
);

//express middleware json parsing
app.use(express.json({extended:false})); //parsing json file

//load routes here
app.use("/",require("./routes/index"));
app.use("/api/url",require("./routes/url"));

//port listen
app.listen(PORT,(err)=>{
    if (err) throw err;
    console.log("Server is running on port number"+ PORT);
});
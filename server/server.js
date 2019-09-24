const express = require("express");
const app=express();
const bodyParser=require("body-parser");
const path=require("path");

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(Request,Response)=>{
   
    // let current_directory=__dirname;
    // let response_directory = current_directory.substring(0,current_directory.length-7);
    // let response_file="\\src\\index.html";
    //  response_directory = response_directory + response_file;
    //  Response.sendFile(response_directory);

    Response.sendFile(path.normalize(__dirname+"/..//src//index.html"));

    //console.log(__dirname);
    //let a="abcd/server";

});


app.post("/",(Request,Response)=>{
    var num1=Request.body.num1;
    var num2=Request.body.num2;
    Response.send("THanks For Submitting our form");

});

app.listen(3000,function(){
    console.log("Server Started...");
});
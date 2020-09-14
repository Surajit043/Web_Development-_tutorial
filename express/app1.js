const express = require('express');
const path= require("path");
const app = express();
const port = 80;

// this is the format to serve static Files
//format ---> app.use ("url of files",express.static("file name"));
app.use("/static",express.static("static"));

// Set the template engine as pug
app.set('view engine', 'pug');

// set the views directory
app.set("views" ,path.join(__dirname , "views") );

// Our demo end point
app.get('/demo', function (req, res){
    res.status(200).render('demo', { title: 'Hey Surajit', message: 'Hello there! and thanks for doig my work properly' })
  })


app.get("/", (req, res) => {
    res.send("this is home page ")
});
app.get("/about", (req,res)=>{
    res.send("this is about page")
});

// to print status code
app.get("/browse",(req,res)=>{
    res.status(404).send("404 page not found")
});

// to print status code with post request instade of get rwquest
app.post("/about",(req,res)=>{
    res.status(400).send("this is post request")
});
app.listen(port, () => {
    console.log(`the server port lissten as ${port}`)
});
const express = require('express');
const path= require("path");
const { Console } = require('console');
const { urlencoded } = require('express');
const app = express();
const fs =require("fs")
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use("/static",express.static("static")); // this is the format to serve static Files
app.use(express.urlencoded( ));

// PUG SPECIFIC STUFF
app.set('view engine', 'pug'); // Set the template engine as pug
app.set("views" ,path.join(__dirname , "views") ); // set the views directory


// ENDPOINTS
app.get("/" , (req,res)=>{
    const con = "This is the content in the body by passing veriable using PUG"
    const params = {"title":"Using Pug creat HTML", "content":con}
    res.status(200).render ("index.pug" , params)
})

app.post("/",(req,res)=>{
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more

    let outputToWrite = `name ${name} , age ${age} , gender ${gender} ,more ${more}`
    fs.writeFileSync("data.txt", outputToWrite)
    // console.log(req.body)
    const params = {"message":"Your Form Has been Submited Sucesfully"}
    res.status(200).render ("index.pug" , params)
})

// START OUR SERVER
app.listen(port, () => {
    console.log(`the server port lissten as ${port}`)
});
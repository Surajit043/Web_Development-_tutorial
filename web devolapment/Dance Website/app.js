const express = require('express');
const path= require("path");
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
    const params = { }
    res.status(200).render ("home.pug" , params)
})
app.get("/contact" , (req,res)=>{
    const params = { }
    res.status(200).render ("contact.pug" , params)
})




// START OUR SERVER
app.listen(port, () => {
    console.log(`the server port lissten as ${port}`)
});
const express  = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 8080;

//public static path

const staticpath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../src/templates/views");
const partialsPath = path.join(__dirname, "../src/templates/partials");

app.set('view engine', 'hbs');
app.set("views",templatePath); 
hbs.registerPartials(partialsPath); 

app.use(express.static(staticpath));

//routing
app.get("", (req, res)=>{
 res.render("index");
});

app.get("/about", (req, res)=>{
    res.send("welcome to about page");
});

app.get("/weather", (req, res)=>{
    res.render("weather");
});

app.get("*", (req, res)=>{
    res.send("This link is not found on system");
});
   

app.listen(port, (req, res)=>{
console.log(`listing to port ${port}`);
});
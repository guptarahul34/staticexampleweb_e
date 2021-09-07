const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();
const port = 8000;

// const staticPath = path.join(__dirname,"../public");
const directyPath = path.join(__dirname,"../templates/views")
const partialsPath = path.join(__dirname,"../templates/partials")
// app.use(express.static(staticPath))
hbs.registerPartials(partialsPath);

app.set("view engine","hbs");
app.set("views",directyPath)
    app.get("/",(req,res)=>{
        res.render("home",{
            title:"home page"
        })
    })

    app.get("/about",(req,res)=>{
        res.render("about");
    })

    app.get("/contact",(req,res)=>{ 
        res.render("contact");
    })

    app.get("*",(req,res)=>{
        res.render("error",{
            errorComment:"hello i am error"
        });
    })


app.listen(port,()=>{
    console.log(`i am listening this in port ${port}`);
})
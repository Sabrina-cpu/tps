const express = require("express");
const path =  require("path");

//console.log(express)
const app = express();
//console.log(app);



app.get("/" , (req , res) => res.sendFile((path.join(__dirname, "views" , "home.html"))));
app.get("/" , (req , res) => res.sendFile((path.join(__dirname, "views" , "contacto.html"))));
app.get("/" , (req , res) => res.sendFile((path.join(__dirname, "views" , "nosotros.html"))));
app.get("/nosotros" , (req , res) => res.send("NOSOTROS"))
app.get("/contacto" , (req , res ) => res.send("CONTACTO"))


app.listen(3000,() => console.log("Servidor corriendo en el puerto 3000"));
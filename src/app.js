const express = require ('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

const routesMain = require("./routes/routesMain");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", routesMain);


app.listen(3010, ()=> {console.log('Servidor corriendo en el puerto 3010')});
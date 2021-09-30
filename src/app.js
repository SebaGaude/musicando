const express = require ('express');
const app = express();

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

const routesCanciones = require("./routes/routesCanciones");
const routesAlbumes = require("./routes/routesAlbumes");


app.use("/canciones", routesCanciones);
app.use("/albumes", routesAlbumes);

app.listen(3010, ()=> {console.log('Servidor corriendo en el puerto 3010')});
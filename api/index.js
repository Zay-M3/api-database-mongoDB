const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");3
const connectDB = require("./database/database");
const UserDAO = require("./dao/UserDAO");

connectDB(); //Conecion a la base de datos

dotenv.config();

const app = express();  

//Middlewares
app.use(express.json()); // con esto se parsea todas las respuestas a json
app.use(
  cors({
    //enables cors con la condiguracion de abajo
    origin: true, // con esto se permite que cualquier origen acceda a la api, no recomendado para producción
    credentials: true, // con esto se permite que se envíen cookies
  })
);

app.get("/", (req, res) => {
  res.send("El servidor esta corriendo");
});

const userDAO = new UserDAO();  

app.get("/api/v1/users/", (req, res) => userDAO.getUsers(req, res));
app.post("/api/v1/users/", (req, res) => userDAO.createUser(req, res));

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`El servidor esta funcionando en http://localhost:${PORT}`);
    
}) 

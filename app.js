import express  from "express";
import * as dotenv from "dotenv";
import Usuarios from "./src/controller/Usuarios.js";
import Trilhas from "./src/controller/Trilhas.js";
import Aulas from "./src/controller/Aulas.js";
import TrilhasAcessadas from "./src/controller/TrilhasAcessadas.js"

dotenv.config();

const porta = process.env.PORT || 3001
const app = express()

app.listen(porta, ()=> {
    console.log(`Servidor rodando em http://localhost:${porta}`)
});

app.use(express.json());

Usuarios.rotas(app);
Trilhas.rotas(app);
Aulas.rotas(app);
TrilhasAcessadas.rotas(app);
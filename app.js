import express  from "express";
import  __dirname  from "path";
import * as dotenv from "dotenv";
import Usuarios from "./src/controller/Usuarios.js";
import Trilhas from "./src/controller/Trilhas.js";
import Aulas from "./src/controller/Aulas.js";
import AulasAcessadas from './src/controller/AulasAcessadas.js'

dotenv.config();

const port = process.env.PORT || 3001
const app = express();

app.listen(port, ()=> {
    console.log(`Servidor rodando em http://localhost:${port}`)
});

app.use(express.json());

Usuarios.rotas(app);
Trilhas.rotas(app);
Aulas.rotas(app);
AulasAcessadas.rotas(app);
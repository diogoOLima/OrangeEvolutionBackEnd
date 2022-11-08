import express  from "express";
import expressFavicon from "express-favicon";
import * as dotenv from "dotenv";
import Usuarios from "./src/controller/Usuarios.js";
import Trilhas from "./src/controller/Trilhas.js";
import Aulas from "./src/controller/Aulas.js";
import AulasAcessadas from './src/controller/AulasAcessadas.js'

dotenv.config();

const favicon = require(expressFavicon);
const port = process.env.PORT || 3001
const app = express();

app.listen(port, ()=> {
    console.log(`Servidor rodando em http://localhost:${port}`)
});

app.use(favicon(__dirname + 'public/favicon.png'));
app.use(express.json());

Usuarios.rotas(app);
Trilhas.rotas(app);
Aulas.rotas(app);
AulasAcessadas.rotas(app);
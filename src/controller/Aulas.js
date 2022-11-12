import aulasModel from "../models/aulasModel.js";
import databaseAulas from "../DAO/databaseAulas.js";
import ValidacaoAulas from "../services/ValidacaoAulas.js";

databaseAulas.criarTabelaAulas();

class Aulas {
  //listar todas aulas
  static rotas(app) {
    app.get("/aulas", async (req, res) => {
      const resposta = await databaseAulas.listarTodasAulas();
      res.status(200).json(resposta);
    });

    //listar por id
    app.get("/aulas/:id", async (req, res) => {
      try {
        const aulas = await databaseAulas.listarAulasPorId(req.params.id);
        if (!aulas) {
          throw new Error("Aula não encontrada para este Id!");
        }
        res.status(200).json(aulas);
      } catch (error) {
        res.status(404).json(error.message);
      }
    });

    //inserir aula
    app.post("/aulas", async (req, res) => {
      const isValid = ValidacaoAulas.isValid(...Object.values(req.body));
      try {
        if (isValid) {
          const aulas = new aulasModel(...Object.values(req.body));
          const resposta = await databaseAulas.inserirAula(aulas);
          res.status(201).json(resposta);
        } else {
          throw new Error(
            "Requisição incompleta ou com erros de validação, por favor revise o corpo da mesma."
          );
        }
      } catch (error) {
        res.status(400).json(error.message);
      }
    });

    //atualizar por id
    app.put("/aulas/:id", async (req, res) => {
      const isValid = ValidacaoAulas.isValid(...Object.values(req.body));
      try {
        const aulaId = await databaseAulas.listarAulasPorId(req.params.id);
        if (!aulaId) {
          throw new Error("Aula não encontrada para esse Id.");
        }
        if (isValid) {
          const aulas = new aulasModel(...Object.values(req.body));
          const resposta = await databaseAulas.atualizarAulaPorId(
            req.params.id,
            aulas
          );
          res.status(200).json(resposta);
        } else {
          throw new Error(
            "Requisição incompleta. Por favor, revise o corpo da mesma."
          );
        }
      } catch (error) {
        res.status(400).json(error.message);
      }
    });

    //deletar trilha
    app.delete("/aulas", async (req, res) => {
      try {
        const trilha = new aulasModel(...Object.values(req.body));
        const resposta = await databaseAulas.deletarAulas(trilha);
        res.status(201).json(resposta);
      } catch (error) {
        res.status(400).json(error.message);
      }
    });

    //deletar por id
    app.delete("/aulas/:id", async (req, res) => {
      try {
        const aulaId = await databaseAulas.listarAulasPorId(req.params.id);
        if (!aulaId) {
          throw new Error("Aula não encontrada para esse Id.");
        }
        const aulas = await databaseAulas.deletarAulaPorId(req.params.id);
        res.status(200).json(aulas);
      } catch (error) {
        res.status(404).json({ Error: error.message });
      }
    });
  }
}

export default Aulas;

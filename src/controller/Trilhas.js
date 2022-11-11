import trilhasModel from "../models/trilhasModel.js";
import databaseTrilhas from "../DAO/databaseTrilhas.js";
import ValidacaoTrilhas from "../services/ValidacaoTrilhas.js";

databaseTrilhas.criarTabelaTrilhas();

class Trilhas {
  //listar todas trilhas
  static rotas(app) {
    app.get("/trilhas", async (req, res) => {
      const resposta = await databaseTrilhas.listarTodasTrilhas();
      res.status(200).json(resposta);
    });

    //listar por id
    app.get("/trilhas/:id", async (req, res) => {
      try {
        const trilhas = await databaseTrilhas.listarTrilhasPorId(req.params.id);
        if (!trilhas) {
          throw new Error("Trilha não encontrado para este Id!");
        }
        res.status(200).json(trilhas);
      } catch (error) {
        res.status(404).json(error.message);
      }
    });

    //inserir trilha
    app.post("/trilhas", async (req, res) => {
      const isValid = ValidacaoTrilhas.isValid(...Object.values(req.body));
      try {
        if (isValid) {
          const trilhas = new trilhasModel(...Object.values(req.body));
          const resposta = await databaseTrilhas.inserirTrilha(trilhas);
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
    app.put("/trilhas/:id", async (req, res) => {
      const isValid = ValidacaoTrilhas.isValid(...Object.values(req.body));
      try {
        const trilhaId = await databaseTrilhas.listarTrilhasPorId(
          req.params.id
        );
        if (!trilhaId) {
          throw new Error("Trilha não encontrada para esse Id.");
        }
        if (isValid) {
          const trilhas = new trilhasModel(...Object.values(req.body));
          const resposta = await databaseTrilhas.atualizarTrilhaPorId(
            req.params.id,
            trilhas
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
    app.delete("/trilhas", async (req, res) => {
      try {
        const trilha = new trilhasModel(...Object.values(req.body));
        const resposta = await databaseTrilhas.deletarTrilhas(trilha);
        res.status(201).json(resposta);
      } catch (error) {
        res.status(400).json(error.message);
      }
    });

    //deletar por id
    app.delete("/trilhas/:id", async (req, res) => {
      try {
        const trilhaId = await databaseTrilhas.listarTrilhasPorId(
          req.params.id
        );
        if (!trilhaId) {
          throw new Error("Trilha não encontrada para esse Id.");
        }
        const trilha = await databaseTrilhas.deletarTrilhaPorId(req.params.id);
        res.status(200).json(trilha);
      } catch (error) {
        res.status(404).json({ Error: error.message });
      }
    });
  }
}

export default Trilhas;

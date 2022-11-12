import aulasAcessadasModel from "../models/aulasAcessadasModel.js";
import databaseAulasAcessadas from "../DAO/databaseAulasAcessadas.js";
import ValidacaoAulasAcessadas from "../services/ValidacaoAulasAcessadas.js";

databaseAulasAcessadas.criarTabelaAulasAcessadas();

class AulasAcessadas {
  //listar todas aulas acessadas
  static rotas(app) {
    app.get("/aulasAcessadas", async (req, res) => {
      const resposta = await databaseAulasAcessadas.listarTodasAulasAcessadas();
      res.status(200).json(resposta);
    });

    //listar por id
    app.get("/aulasAcessadas/:id", async (req, res) => {
      try {
        const aulas = await databaseAulasAcessadas.listarAulasAcessadasPorId(
          req.params.id
        );
        if (!aulas) {
          throw new Error("Aula Acessada não encontrado para este Id!");
        }
        res.status(200).json(aulas);
      } catch (error) {
        res.status(404).json(error.message);
      }
    });

    //inserir aula acessada
    app.post("/aulasAcessadas", async (req, res) => {
      const isValid = ValidacaoAulasAcessadas.isValid(
        ...Object.values(req.body)
      );
      try {
        if (isValid) {
          const aulas = new aulasAcessadasModel(...Object.values(req.body));
          const resposta = await databaseAulasAcessadas.inserirAulaAcessada(
            aulas
          );
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
    app.put("/aulasAcessadas/:id", async (req, res) => {
      const isValid = ValidacaoAulasAcessadas.isValid(
        ...Object.values(req.body)
      );
      try {
        const aulaId = await databaseAulasAcessadas.listarAulasAcessadasPorId(
          req.params.id
        );
        if (!aulaId) {
          throw new Error("Trilha não encontrada para esse Id.");
        }
        if (isValid) {
          const aulas = new aulasAcessadasModel(...Object.values(req.body));
          const resposta =
            await databaseAulasAcessadas.atualizarAulaAcessadaPorId(
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

    //deletar trilhasAcessadas
    app.delete("/aulasAcessadas", async (req, res) => {
      try {
        const aulas = new aulasAcessadasModel(...Object.values(req.body));
        const resposta = await databaseAulasAcessadas.deletarAulasAcessadas(
          aulas
        );
        res.status(201).json(resposta);
      } catch (error) {
        res.status(400).json(error.message);
      }
    });

    //deletar por id
    app.delete("/aulasAcessadas/:id", async (req, res) => {
      try {
        const aulaId = await databaseAulasAcessadas.listarAulasAcessadasPorId(
          req.params.id
        );
        if (!aulaId) {
          throw new Error("Trilha não encontrada para esse Id.");
        }
        const aula = await databaseAulasAcessadas.deletarAulaAcessadaPorId(
          req.params.id
        );
        res.status(200).json(aula);
      } catch (error) {
        res.status(404).json({ Error: error.message });
      }
    });
  }
}

export default AulasAcessadas;

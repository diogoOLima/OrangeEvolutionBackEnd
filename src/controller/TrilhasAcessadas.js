import trilhasAcessadasModel from "../models/trilhasAcessadasModel.js";
import databaseTrilhasAcessadas from '../DAO/databaseTrilhasAcessadas.js'

databaseTrilhas.criarTabelaTrilhasAcessadas();

class TrilhasAcessadas {
    
    //listar todas trilhas
    static rotas(app) {                                  
        app.get("/trilhasAcessadas", async (req, res)=>{
            const resposta = await databaseTrilhasAcessadas.listarTodasTrilhasAcessadas();
            res.status(200).json(resposta)
        });

        //listar por id
        app.get("/trilhasAcessadas/:id", async(req, res) => {
            try {
                const trilhas = await databaseTrilhasAcessadas.listarTrilhasAcessadasPorId(req.params.id);
                if(!trilhas) {
                    throw new Error("Trilha Acessada não encontrado para este Id!")
                }
                res.status(200).json(trilhas);
            } catch(error) {
                res.status(404).json(error.message);
            }
        });

        //inserir trilha acessada
        app.post("/trilhasAcessadas", async(req, res)=> {
            try {
                const trilhas = new trilhasAcessadasModel(...Object.values(req.body));
                const resposta = await databaseTrilhasAcessadas.inserirTrilhaAcessada(trilhas);
                res.status(201).json(resposta);
            } catch(error) {
                res.status(400).json(error.message)
            }
        });

        //atualizar por id
        app.put("/trilhasAcessadas/:id", async(req,res)=> {
            try {
                const trilhaId = await databaseTrilhasAcessadas.listarTrilhasAcessadasPorId(req.params.id);
                if(!trilhaId) {
                    throw new Error("Trilha não encontrada para esse Id.")
                }
                const trilhas = new trilhasAcessadasModel(...Object.values(req.body));
                const resposta = await databaseTrilhasAcessadas.atualizarTrilhaAcessadaPorId(req.params.id, trilhas);
                res.status(200).json(resposta);
            } catch (error) {
                res.status(400).json(error.message);
              }
        });

        //deletar por id
        app.delete("/trilhasAcessadas/:id", async(req,res)=> {
            try {
                const trilhaId = await databaseTrilhasAcessadas.listarTrilhasAcessadasPorId(req.params.id);
                if(!trilhaId) {
                    throw new Error("Trilha não encontrada para esse Id.")
                }
                const trilha = await databaseTrilhasAcessadas.deletarTrilhaAcessadaPorId(req.params.id);
                res.status(200).json(trilha);
            }catch (error) {    
                res.status(404).json({ Error: error.message });
              }
        });
    }
}

export default TrilhasAcessadas;
import DAO from "./DAO.js";

class databaseTrilhasAcessadas extends DAO {

    static async criarTabelaTrilhasAcessadas() {
        const query = `CREATE TABLE IF NOT EXISTS trilhasAcessadas(
                        trilhasAcessadas_Id INTEGER PRIMARY KEY AUTOINCREMENT,
                        trilha_id INTEGER NOT NULL,
                        usuario_id INTEGER NOT NULL,
                        FOREIGN KEY (usuario_id) REFERENCES usuarios(usuario_id),
                        FOREIGN KEY (trilha_id) REFERENCES trilhas(trilha_id)
                        )`;
        const resposta = await this.criarTabela(query);
        return resposta;
    }

    static async inserirTrilhaAcessada(trilha) {
        const query = `INSERT INTO trilhasAcessadas (usuario_id, trilha_id) VALUES (?, ?)`;
        const resposta = await this.inserir(trilha, query);
        return resposta
    }

    static async listarTodasTrilhasAcessadas() {
        const query = `SELECT usuarios.usuario, trilhas.tipo, trilhas.nomeTrilha, usuarios.usuario_id, trilhas.trilha_id
         FROM usuarios
         INNER JOIN trilhasAcessadas ON usuarios.usuario_id = trilhasAcessadas.usuario_id
         INNER JOIN trilhas ON trilhas.trilha_id = trilhasAcessadas.trilha_id`;
        const resposta = await this.listarTodos(query);
        return resposta;
      }
      static async listarTrilhasAcessadasPorId(id) {
        const query = `SELECT usuarios.usuario, trilhas.tipo, trilhas.nomeTrilha, usuarios.usuario_id, trilhas.trilha_id
        FROM usuarios
        INNER JOIN trilhasAcessadas ON usuarios.usuario_id = trilhasAcessadas.usuario_id
        INNER JOIN trilhas ON trilhas.trilha_id = trilhasAcessadas.trilha_id
        WHERE trilhasAcessadas_Id = ?`;
        const resposta = await this.listarPorId(id, query);
        return resposta;
      }

      static async deletarTrilhasAcessadas() {
        const query = `DROP TABLE trilhasAcessadas`;
        const resposta = await this.deletarTabela( query);
        return resposta;
      }


      static async deletarTrilhaAcessadaPorId(id) {
        const query = `DELETE FROM trilhas WHERE trilhasAcessadas_Id = ?`;
        const resposta = await this.deletarPorId(id, query);
        return resposta;
      }
      static async atualizarTrilhaAcessadaPorId(id, trilha) {
        const query = `UPDATE trilhas
        SET usuario_id = ?,
            trilha_id = ?,
            WHERE trilhasAcessadas_Id = ?`;
        const resposta = await this.atualizarPorId(trilha, id, query);
        return resposta;
      }
}

export default databaseTrilhasAcessadas;
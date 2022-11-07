import DAO from "./DAO.js";

class databaseAulasAcessadas extends DAO {

    static async criarTabelaAulasAcessadas() {
        const query = `CREATE TABLE IF NOT EXISTS aulasAcessadas(
                        aulasAcessadas_id INTEGER PRIMARY KEY AUTOINCREMENT,
                        aula_id INTEGER NOT NULL,
                        usuario_id INTEGER NOT NULL,
                        FOREIGN KEY (usuario_id) REFERENCES usuarios(usuario_id),
                        FOREIGN KEY (aula_id) REFERENCES aulas(aula_id)
                        )`;
        const resposta = await this.criarTabela(query);
        return resposta;
    }

    static async inserirAulaAcessada(trilha) {
        const query = `INSERT INTO trilhasAcessadas (usuario_id, aula_id) VALUES (?, ?)`;
        const resposta = await this.inserir(trilha, query);
        return resposta
    }

    static async listarTodasAulasAcessadas() {
        const query = `SELECT usuarios.usuario, aulas.nomeAula, aulas.tipo, usuarios.usuario_id, aulas.aula_id
         FROM usuarios
         INNER JOIN aulasAcessadas ON usuarios.usuario_id = aulasAcessadas.usuario_id
         INNER JOIN aulas ON aulas.aula_id = aulasAcessadas.aula_id`;
        const resposta = await this.listarTodos(query);
        return resposta;
      }
      static async listarAulasAcessadasPorId(id) {
        const query = `SELECT usuarios.usuario, aulas.nomeAula, aulas.tipo, usuarios.usuario_id, aulas.aula_id
        FROM usuarios
        INNER JOIN aulasAcessadas ON usuarios.usuario_id = aulasAcessadas.usuario_id
        INNER JOIN aulas ON aulas.aula_id = aulasAcessadas.aula_id
        WHERE aulasAcessadas_id = ?`;
        const resposta = await this.listarPorId(id, query);
        return resposta;
      }

      static async deletarAulasAcessadas() {
        const query = `DROP TABLE aulasAcessadas`;
        const resposta = await this.deletarTabela(query);
        return resposta;
      }


      static async deletarAulaAcessadaPorId(id) {
        const query = `DELETE FROM aulas WHERE aulasAcessadas_id = ?`;
        const resposta = await this.deletarPorId(id, query);
        return resposta;
      }
      static async atualizarAulaAcessadaPorId(id, trilha) {
        const query = `UPDATE aulas
        SET usuario_id = ?,
            aula_id = ?,
            WHERE aulasAcessadas_id = ?`;
        const resposta = await this.atualizarPorId(trilha, id, query);
        return resposta;
      }
}

export default databaseAulasAcessadas;
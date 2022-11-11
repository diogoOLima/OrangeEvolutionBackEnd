export default class ValidacaoAulasAcessadas {

    static validaAulaId(aulaid) {
        if(typeof aulaid === "number") {
            return aulaid > 0;
        } else {
            return false;
        }
    }

    static validaUsuarioId(usuarioid) {
        if(typeof usuarioid === "number") {
            return aulaid > 0;
        } else {
            return false;
        }
    }

    static isValid(aulaid, usuarioid, tempo, origem, tipo) {
        return (
          this.validaAulaId(aulaid) &&
          this.validaUsuarioId(usuarioid) 
        );
      }
}
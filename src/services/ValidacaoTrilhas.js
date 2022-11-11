export default class ValidacaoTrilhas {

    static validanomeTrilha(trilha) {
        return trilha.startsWith("Trilha");
    }

    static validaTipo(tipo) {
        return tipo.length > 5;
    }

    static isValid(trilha, tipo) {
        return (
          this.validanomeTrilha(trilha) &&
          this.validaTipo(tipo) 
        );
      }
}
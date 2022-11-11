export default class ValidacaoAulas {

    static validanomeAula(aula) {
        return aula.length >= 4;
    }

    static validaLink(link) {
        const regex = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig;
        return regex.test(link)
    }

    static validaTempo(tempo) {
        return tempo.length > 3;
    }

    static validaOrigem(origem) {
        return origem.length > 2;
    }

    static validaTipo(tipo) {
        return tipo.length > 5;
    }

    static isValid(aula, link, tempo, origem, tipo) {
        return (
          this.validanomeAula(aula) &&
          this.validaLink(link) &&
          this.validaTempo(tempo) &&
          this.validaOrigem(origem) && 
          this.validaTipo(tipo)
        );
      }
}
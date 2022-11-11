export default class ValidacaoAulas {

    static validanomeAula(aula) {
        return aula.length >= 4;
    }

    static validaLink(link) {
        if(typeof link === "string") {
            return link > 0
        } else {
            return false;
        }
    }

    static validaTempo(tempo) {
        return tempo.length > 3;
    }

    static validaOrigem(origem) {
        return origem.length >= 2;
    }

    static validaTipo(tipo) {
        return tipo.length > 5;
    }
}
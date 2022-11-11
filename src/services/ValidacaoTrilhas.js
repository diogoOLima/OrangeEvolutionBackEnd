export default class ValidacaoTrilhas {

    static validanomeTrilha(trilha) {
        return trilha == "Trilha" + "";
    }

    static validaTipo(tipo) {
        return tipo.length > 5;
    }
}
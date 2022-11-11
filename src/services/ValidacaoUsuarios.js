export default class ValicadaoUsuarios {

    static validaUsuario(nome) {
        return nome.length >= 3;
    }

    static validaSenha(senha) {
        return senha.length >= 5;
    }

    static validaAdmin(admin) {
        return admin == 0 || admin == 1;
    }

    static isValid(nome, senha, admin) {
        return (
          this.validaUsuario(nome) &&
          this.validaSenha(senha) &&
          this.validaAdmin(admin)
        );
      }
}
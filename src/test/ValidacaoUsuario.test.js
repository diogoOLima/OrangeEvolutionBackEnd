import ValicadaoUsuarios from "../services/ValidacaoUsuarios.js";

/* Validação Usuário */
test("Validade se o nome de usuário tem 3 caracteres ou mais.", ()=> {
    expect(ValicadaoUsuarios.validaUsuario("Lucas Laranja")).toBe(true);
});

test("Validade se o nome de usuário tem 3 caracteres ou mais.", ()=> {
    expect(ValicadaoUsuarios.validaUsuario("LJ")).toBe(false);
});

/* Validação Senha */
test("Validade se a senha tem 5 ou mais caracteres.", ()=> {
    expect(ValicadaoUsuarios.validaSenha("lucas123")).toBe(true);
});

test("Validade se a senha tem 5 ou mais caracteres.", ()=> {
    expect(ValicadaoUsuarios.validaSenha("test")).toBe(false);
});

/* Validação Senha */
test("Valida se campo isAdmin é 0 ou 1", ()=> {
    expect(ValicadaoUsuarios.validaAdmin("1")).toBe(true);
});

test("Valida se campo isAdmin é 0 ou 1", ()=> {
    expect(ValicadaoUsuarios.validaAdmin("2")).toBe(false);
});
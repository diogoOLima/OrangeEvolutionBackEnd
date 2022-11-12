import ValidacaoAulasAcessadas from '../services/ValidacaoAulasAcessadas.js';

/* Validação aula_id */
test("Valida se a aula_id é um número.", ()=> {
    expect(ValidacaoAulasAcessadas.validaAulaId(5)).toBe(true);
});

test("Valida se a aula_id é um número.", ()=> {
    expect(ValidacaoAulasAcessadas.validaAulaId("5")).toBe(false);
});

/* Validação usuario_id */
test("Valida se o usuário_id é um número.", ()=> {
    expect(ValidacaoAulasAcessadas.validaAulaId(2)).toBe(true);
});

test("Valida se o usuário_id é um número.", ()=> {
    expect(ValidacaoAulasAcessadas.validaAulaId("3")).toBe(false);
});
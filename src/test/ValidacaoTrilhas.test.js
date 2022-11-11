import ValidacaoTrilhas from '../services/ValidacaoTrilhas.js'

/* Validação nomeTrilha */
test("Valida se o nome da trilha começa com Trilha.", ()=> {
    expect(ValidacaoTrilhas.validanomeTrilha("Trilha Nova")).toBe(true);
});

test("Valida se o nome da trilha começa com Trilha.", ()=> {
    expect(ValidacaoTrilhas.validanomeTrilha("trilha Nova")).toBe(false);
});

/* Validação tipoTrilha */
test("Valida se o tamanho da string tipo é maior que 5 letras", ()=> {
    expect(ValidacaoTrilhas.validaTipo("Artigo Novo")).toBe(true);
});

test("Valida se o tamanho da string tipo é maior que 5 letras", ()=> {
    expect(ValidacaoTrilhas.validaTipo("Curso")).toBe(false);
});
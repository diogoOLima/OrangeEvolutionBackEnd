import ValidacaoAulas from '../services/ValidacaoAulas.js';

/* Validação nomeAula */
test("Valida se o nome da aula possui 4 ou mais letras.", ()=> {
    expect(ValidacaoAulas.validanomeAula("Desenvolvimento de Sistemas")).toBe(true);
});

test("Valida se o nome da aula possui 4 ou mais letras.", ()=> {
    expect(ValidacaoAulas.validanomeAula("Des")).toBe(false);
});

/* Validação link */
test("Valida se o link é url.", ()=> {
    expect(ValidacaoAulas.validaLink("www.teste.com")).toBe(true);
});

test("Valida se o link é url.", ()=> {
    expect(ValidacaoAulas.validaLink("linkQueNaoPareceURL")).toBe(false);
});

/* Validação tempo */
test("Valida se a string de tempo é maior ou igual a 3.", ()=> {
    expect(ValidacaoAulas.validaTempo("5 minutos")).toBe(true);
});

test("Valida se a string de tempo é maior ou igual a 3.", ()=> {
    expect(ValidacaoAulas.validaTempo("10")).toBe(false);
});

/* Validação origem */
test("Valida se a string de origem é maior que 2.", ()=> {
    expect(ValidacaoAulas.validaOrigem("Orange")).toBe(true);
});

test("Valida se a string de origem é maior que 2.", ()=> {
    expect(ValidacaoAulas.validaOrigem("OJ")).toBe(false);
});

/* Validação tipo */
test("Valida se o tamanho da string tipo é maior que 5 letras", ()=> {
    expect(ValidacaoAulas.validaTipo("Artigo Novo")).toBe(true);
});

test("Valida se o tamanho da string tipo é maior que 5 letras", ()=> {
    expect(ValidacaoAulas.validaTipo("Curso")).toBe(false);
});

/*
Essa era a função antes do refactor da função soma, 
se quiser pode descomentar essa parte do código 
e comentar o código atual para ver o que eu tinha falado 
antes de usar TDD, evitar alterações no código, por 
você e/ou outras pessoas ocasionem erros inesperados

Fiz tambem antes da refatoração testes para verificar 
os erros de tipo no arquivo de teste
*/

/*
export function soma(n1: number, n2: number) {
    return n1 + n2;
} 
*/

// "export" significa que o arquivo exporta a função soma
// para que assim possa ser usado em outros arquivos
// "number" serve para especificarmos os tipos das 
// variáveis de parametros de nossas funções no TS (TypeScript)
// no nosso caso que estamos usando VS Code o editor irá nos mostrar
// varias coisas como as funções que esse tipo de variável tem e
// mostrar com linhas vermelhas nos parametros caso alguem tente usar
// essa função com parametros que não são números
export function soma(n1: number, n2: number) {
    // "typeof" serve para retornar o tipo de uma variável
    // e podermos executar operações com o valor retornado,
    // no caso, verificar se o tipo da variável é "number"
    if (typeof n1 !== 'number') {
        // "throw" server enviarmos um erro aos outros desenvolvedores
        // para que eles possam identificar o que ocorreu e tratar o 
        // problema da melhor forma caso não estjam usando a função
        // da forma correta
        throw "Parametro 1 deve ser do tipo numérico"
    }
    if (typeof n2 !== 'number') {
        throw "Parametro 2 deve ser do tipo numérico"
    }

    // retorna a soma das variáveis do tipo número
    return n1 + n2;
}
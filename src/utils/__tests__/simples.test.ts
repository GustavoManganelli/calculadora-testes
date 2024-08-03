/**
 * leia a pagina toda antes de sair fazendo 
 * e tente entender a proposta do TDD
 * 
 * Existem vários tipos de testes:
 * 
 * Testes Unitários = Testam unidades atomicas de codigo,
 * como por exemplo pequenas funções, nesse exercicio vamos abordar isso, outro
 * exemplo são testes de unidade para front-end que você poderá ver na pasta
 * "src/components/__tests__/HelloWorld.test.ts"
 * 
 * Testes de Integração = Testam se uma funcionalidade como 
 * um todo que pode ou não utilizar funções mais simples dentro delas,
 * como foi o caso da função "realizarOperacao" que fizemos no repositório 
 * "Treino" no projeto "calculadora", que você terá que fazer depois deste
 * exercicio de teste unitário.
 * 
 * Testes End to End ou E2E = São testes que literalmente usam sua aplicação 
 * como se fossem usuários, clicando em botões, preenchendo formulários, colocando,
 * alterando, vizualizando e deletando dados do sistema, mas esses não vamos ver tão
 * cedo pelo tempo que temos, pelo menos não juntos, mas seria legal vc pelo menos 
 * dar uma olhada.
 *    
 * 
 * Existem outros tipos de testes, mas com os 3 principais tipos já descritos
 * acredito que você possa passar para os exercicios
 * 
 * Seu objetivo é recriar a funcionalidade de calculadora do repositório 
 * treino aplicando TDD
 * * Não se preocupe com telinha nesse primeiro momento, faça e teste as 
 * * funcionalidades apenas com os testes automatizados
 * * eles também aceitam console.log()
 * 
 * Não tem problema pesquisar para ver como as coisas são feitas, ou reler o que escrevi 
 * ou me perguntar o que não entendeu, tentei ser o mais descritivo possível aqui por texto, 
 * mas qualquer coisa é só chamar.
 * 
 * Os comandos de terminal que você vai precisar usar são
 * npm run test:unit
 * 
 * Lembre-se para deixar mais rápido para escrever os comandos no terminal 
 * você pode simplesmente apertar a seta para cima que vai completar com o 
 * último comando que você colocou.
 * 
 * !! EXERCÍCIO BÔNUS
 * * FAZER APENAS APÓS COMPLETAR OS EXERCÍCIOS ABAIXO
 * Crie um novo novo arquivo .test e .ts com a mesma funcionalidade da função 
 * "realizarOperacao" do projeto de calculadora do repositório Treino
 * implementando o que foi aprendido neste arquivo de TDD
 * 
 * 
 * !! EXERCÍCIO BÔNUS EXTREMOOOOOOO
 * * FAZER APENAS APÓS COMPLETAR OS EXERCÍCIOS ABAIXO E O EXERCÍCIO BÔNUS
 * Crie uma tela com Vue com as funcionalidades da calculadora original 
 * botões, resultado e input's 
 * 
 * para rodar a aplicação use o comando no terminal
 * npm run dev
 */

// Esse import serve para trazer códigos de outros
// modulos (arquivos .js/.ts) que tenham export
import {soma, subtracao} from '../simples'
import { describe, test, expect } from "vitest";

/**
 passos para o TDD

 red - fazer um teste com as especificações da funcionalidade falhando

 green - desenvolver a funcionalide de forma a atender os testes

 refactor - melhorar a funcionalidade. Ex.: adicionar restrições para 
 casos que não deveriam acontecer (isso terá que ter testes também), 
 melhorar nomes de variavéis e legibilidade da funcionalidade para
 outros desenvolvedores (isso não poderá quebrar os testes já existentes),
 deixar uma funcionalidade melhor, como por exemplo melhore o tempo de execução
 (isso tambemm não poderá quebrar os testes anteriores), entre outros casos

*/


// describe serve para dizermos para o que serve 
// uma certa bateria de Testes (conjunto de vários testes)
// describe pode ser usado um dentro do outro para deixarmos 
// os testes mais organizados
describe("Testa operações básicas", () => {
    // Esse describe é um exemplo de segmentação desses testes 
    // onde o primerio se refere a testes de todas as operações
    // e o que esta abaixo é apenas para os retornos da 
    // função soma
    describe("Testa retorno das Somas", () => {
        // test serve para descrevermos o que um teste 
        // está testando e fazermos o teste, isso com 
        // dois parametros
        // - O primeiro parametro é um texto que descreve o que a
        // função deve fazer para passar no teste
        // - O segundo é uma função que utiliza a função sendo 
        // testada e verifica se o que aconteceu realmente 
        // deveria acontecer
        test(
            // texto descrevendo o que esta testando (parametro 1)
            "Soma de 1 + 1 deve retornar 2", 
            // arrow function (() => {}) fazendo o teste (parametro 2)
            () => {
                // expect serve para usarmos o *RESULTADO* da função
                // no teste
                // toBe é o valor que estamos esperando de retorno
                expect(soma(1, 1)).toBe(2);

                // * NOTA
                // Existem muitos outros tipos de testes no vitest
                // você pode olhar a documentação do Vitest ( https://vitest.dev/api/assert.html) 
                // se tiver dúvidas de como fazer outros tipos de teste 
            }
        );
        // aqui está outra forma
        test("Soma de 2 + 1 deve retornar 3", () => {
            const resultadoFunc = soma(2, 1);
            // você pode usar console.log() se quiser debugar
            console.log(resultadoFunc);
            expect(resultadoFunc).toBe(3);
        });
        test("Soma deve retornar um numero", () => {
            // toBeTypeOf verifica o tipo do retorno
            expect(soma(2, 2)).toBeTypeOf("number");
        });
    });

    // !! EXERCÍCIO
    // faça os testes com subtração (falhando mesmo)  
    // depois implemente a funcionalidade no arquivo 
    // "/src/utils/simples.ts" e melhore quando estiver 
    // tudo funcionando 
    describe("Testa retorno das Subtrações", () => {
        test("Subtracao de 1 - 1 deve retornar 0", () => {
            expect(subtracao(1, 1)).toBe(0);
        });
        test("Subtracao de 2 - 1 deve retornar 1", () => {
            // faça seu teste com subtração
        });
        test("Subtracao de 2 - 3 deve retornar -1", () => {
            // faça seu teste com subtração
        });
    });

    // !! EXERCÍCIO
    // 1. faça o teste com a função multiplicação (ele vai falhar no inicio mesmo 
    //    (lembra do red)) 
    // 2. faça a função de multiplicação no arquivo para fazer os testes que você criou
    //    funcionar (lembra do green)
    // 3. melhore sua função, deixe os nomes de variáveis mais descritivos,
    //    deixe o código mais fácil de ler, etc... (lembra do refactor)

    // !! EXERCÍCIO
    // faça a funcionalidade da divisão com TDD
});




// Isso foi adicionado na fase de refactor da função soma
// antes de implementar os if's de tipo na função
describe("Testa parametros das operações simples", () => {
    describe("Função soma só aceita numeros", () => {
        test("Deve retornar erro caso um ou mais parametros não sejam numeros", () => {
            // verifica se o retorno da função é um erro com os texto 
            // em toThrowError

            // @ts-ignore significa que o TypeSctipt irá ignorar o tipo errado 
            // que está sendo passado na função soma, para não termos linhas vermelhas
            // em nosso editor de texto para fazer o teste do erro

            //@ts-ignore
            expect(() => soma("2", 1)).toThrowError(
                /^Parametro 1 deve ser do tipo numérico$/,
              )
            //@ts-ignore
            expect(() => soma(2, "1")).toThrowError(
                /^Parametro 2 deve ser do tipo numérico$/,
              )
            //@ts-ignore
            expect(() => soma("2", "1")).toThrowError(
                /^Parametro 1 deve ser do tipo numérico$/,
              )
        });
    })
    
});
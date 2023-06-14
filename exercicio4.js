/**
 * [M1S05] Ex 4 - Imprimir sequência de Fibonacci
 *
 * Escreve um programa que imprime a sequência de Fibonacci até o número atribuído na variável
 * `número`. A sequência de Fibonacci é formada pela soma dos dois números anteriores:
 * 0, 1, 1, 2, 3, 5, 8, 13, ...
 * Utiliza uma estrutura de repetição (while) para gerar a sequência.
 */

let número = parseInt(prompt("Digite um número:"));
let fibonacci= [0, 1];

let i = 2;
while (fibonacci[i - 1] + fibonacci[i - 2] <= número) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  i++;
}

alert("Sequência de Fibonacci até " + número + ": " + fibonacci.join(", "));
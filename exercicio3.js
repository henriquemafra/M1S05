/**
 * [M1S05] Ex 3 - Verificar número primo
 *
 * Escreve um programa que atribui um valor a uma variável `número` e verifica se ele
 * é um número primo. Um número primo é aquele que é divisível apenas por 1 e por ele mesmo.
 * Utiliza uma estrutura de repetição (do while) para verificar as divisões.
 */

let num = parseInt(prompt("Digite um número: "));

let i = 2;
let divisor = 0;


do {
  if (num % i === 0) {
    divisor++;
  }
  i++;
} while (i < num);

if (divisor === 0) {
  alert(num + " é número primo");
} else {
  alert(num + " não é número primo.");
}

/**
 * [M1S05] Ex 8 - Teste de funções da calculadora
 *
 * Escreve uma função chamada `calculadora` que recebe três parâmetros: dois números e uma função de operação
 * matemática. A função `calculadora` executa a operação matemática nos dois números fornecidos e retorna o resultado.
 * Testa a função utilizando diferentes operações como adição, subtração, multiplicação e divisão.
 */

function calculadora(num1, num2, operacao) {
    let resultado;
  
    switch (operacao) {
      case '+':
        resultado = num1 + num2;
        break;
      case '-':
        resultado = num1 - num2;
        break;
      case '*':
        resultado = num1 * num2;
        break;
      case '/':
        resultado = num1 / num2;
        break;
      default:
        resultado = 'Operação inválida';
    }
  
    return resultado;
  }
  
  console.log(calculadora(2, 3, '+')); 
  console.log(calculadora(5, 2, '-')); 
  console.log(calculadora(4, 3, '*'));
  console.log(calculadora(10, 2, '/'));
  console.log(calculadora(5, 2, '%'));
  
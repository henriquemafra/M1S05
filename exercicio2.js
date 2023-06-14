/**
 * [M1S05] Ex 2 - Tradução de cores
 *
 * Escreve um programa que atribui um valor a uma variável `cor` em inglês e imprime
 * a tradução para a mesma cor em português. Utiliza uma estrutura condicional (switch)
 * para fazer o mapeamento das cores.
 */

let cor = prompt("Escreva o nome da cor em inglês: ").toLowerCase();

switch (cor) {
  case "red":
    alert("Vermelho");
    break;
  case "yellow":
    alert("Amarelo");
    break;
  case "green":
    alert("Verde");
    break;
  case "purple":
    alert("Roxo");
    break;
  case "orange":
    alert("Laranja");
    break;
  case "grey":
    alert("Cinza");
    break;
  case "black":
    alert("Preto");
    break;
  default:
    alert("Não encontramos uma tradução para uma cor com este nome, tente outra.");
}

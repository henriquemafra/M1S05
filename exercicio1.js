/**
 * [M1S05] Ex 1 - Classificação de idade
 *
 * Escreve um programa que atribui um valor a uma variável `idade` e determina
 * em qual categoria ela se enquadra: criança (0-12 anos), adolescente (13-17 anos),
 * adulto (18-59 anos) ou idoso (60 anos ou mais). Utiliza uma estrutura condicional
 * (if, else if, else).
 */

let idade = parseInt(prompt("Digite sua idade: "));

if (idade >= 0 && idade <= 12) {
    alert("Criança");
} else if (idade >= 13 && idade <= 17) {
    alert("Adolescente");
} else if (idade >= 18 && idade <= 59) {
    alert("Adulto");
} else if (idade >= 60) {
    alert("Idoso");
}


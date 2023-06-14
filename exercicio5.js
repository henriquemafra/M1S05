/**
 * [M1S05] Ex 5 - Verificar palavras em um array
 *
 * Escreve um programa que percorre um array de palavras e exibe todas as palavras que possuem
 * mais de 5 caracteres. Utiliza a estrutura de repetição for of para percorrer o array.
 */

let palavras = ["campo", "carro", "estrada", "avião", "nomes", "cavalo", "idade", "nomes", "comercio", "abrigo", "chuva", "vento", "armario", "televisao", "computador",
 "porta", "jogo"]
let palavrasCincoLetras = []

for (let palavra of palavras) {
    if (palavra.length > 5) {
        palavrasCincoLetras.push(palavra)
        alert("Sequência de palavras do array com mais de 5 letras: " + palavrasCincoLetras.join(", "))
    }
}

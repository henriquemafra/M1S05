/**
 * [M1S05] Ex 6 - Percorrer array de objetos de produtos
 *
    * Escreve um programa que percorre um array de objetos que representam produtos e exibe o nome
    * e o preço de cada produto. Após imprimir essas informações, imprime o total de produtos
    * e o valor total de todos os produtos.
 */

const produtos = [
    { nome: "Café", preco: 12.50 },
    { nome: "Nescau", preco: 16.36 },
    { nome: "Macarrão", preco: 2.59 },
    { nome: "Arroz", preco: 12.30 },
    { nome: "Feijão", preco: 16.50 }
  ];
  
  let totalProdutos = 0;
  let precoTotal = 0;
  
  for (let i = 0; i < produtos.length; i++) {
    const produto = produtos[i];
    alert(`Nome do Produto: ${produto.nome}, Preço do Produto: ${produto.preco}`);
    totalProdutos++;
    precoTotal += produto.preco;
  }
  
  alert(`Quantidade de Produtos: ${totalProdutos}, Preço Total: ${precoTotal}`);
  
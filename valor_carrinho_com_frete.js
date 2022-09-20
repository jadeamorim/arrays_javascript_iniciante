// Calcule a soma dos itens do carrinho. aplique uma taxa de 15 reais de frete e imprima o total formatado em reais.


const carrinho = [
    {
      produto: "Camisa branca:",
      quantidade: 4,
      valorDaUnidade: 25.50,
    },
    {
      produto: "Calça jeans:",
      quantidade: 2,
      valorDaUnidade: 180.25,
    },
    {
      produto: "Jaqueta",
      quantidade: 1,
      valorDaUnidade: 299.99,
    },
    {
      produto: "Tênis de Corrida",
      quantidade: 1,
      valorDaUnidade: 150.50,
    },
    {
      produto: "Par de meias",
      quantidade: 3,
      valorDaUnidade: 15.00,
    },
    {
      produto: "Relógio esportivo",
      quantidade: 1,
      valorDaUnidade: 350.00,
    },
]

let soma = 0;

for(produto of carrinho){
    soma+= produto.quantidade*produto.valorDaUnidade;
}

let valorTotal = (soma+15.00).toFixed(2);

console.log(`O valor total do carrinho é de R$ ${valorTotal}`);

// 19) O cardápio de uma lanchonete é o seguinte:
// Código Descrição do Produto Preço
// 100 Cachorro Quente R$ 3,00
// 200 Hambúrguer Simples R$ 4,00
// 300 Cheeseburguer R$ 5,50
// 400 Bauru R$ 7,50
// 500 Refrigerante R$ 3,50
// 600 Suco R$ 2,80
// Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
// a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
// comando switch. Crie um caso default para produto não existente.

function cardapio(codigo, quantidade) {
    switch (codigo) {
        case 100:
            return `Cachorro Quente: R$ ${(quantidade * 3).toFixed(2).replace('.', ',')}`
        case 200:
            return `Hambúrguer Simples: R$ ${(quantidade * 4).toFixed(2).replace('.', ',')}`
        case 300:
            return `Cheeseburguer: R$ ${(quantidade * 5.5).toFixed(2).replace('.', ',')}`
        case 400:
            return `Bauru: R$ ${(quantidade * 7.5).toFixed(2).replace('.', ',')}`
        case 500:
            return `Refrigerante: R$ ${(quantidade * 3.5).toFixed(2).replace('.', ',')}`
        case 600:
            return `Suco: R$ ${(quantidade * 2.8).toFixed(2).replace('.', ',')}`
        default:
            return 'Produto não existente'
    }
}

console.log(cardapio(100, 2))
console.log(cardapio(200, 2))
console.log(cardapio(300, 2))
console.log(cardapio(400, 2))
console.log(cardapio(500, 2))
console.log(cardapio(600, 2))
console.log(cardapio(700, 2))

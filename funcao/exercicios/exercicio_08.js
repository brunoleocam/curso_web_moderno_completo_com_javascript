// 08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
// registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
// mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
// pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
// vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
// jogo. (Número do pior jogo).

function pontuacao(pontuacoes) {
    let pontuacoesArray = pontuacoes.split(' ');
    let recordes = 0;
    let piorJogo = 1;
    let maiorPontuacao = pontuacoesArray[0];
    let menorPontuacao = pontuacoesArray[0];
    for (let i = 1; i < pontuacoesArray.length; i++) {
        if (parseInt(pontuacoesArray[i]) > parseInt(maiorPontuacao)) {
            maiorPontuacao = pontuacoesArray[i];
            recordes++;
        } else if (parseInt(pontuacoesArray[i]) < parseInt(menorPontuacao)) {
            menorPontuacao = pontuacoesArray[i];
            piorJogo = i + 1;
        }
    }
    return [recordes, piorJogo];
}

console.log(pontuacao('10 20 20 8 25 3 0 30 1'));
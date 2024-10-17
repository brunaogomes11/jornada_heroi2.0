const rl = require('readline-sync');

function calculadora_ranking(vitorias, derrotas) {
    let nivel = 'Sem nível';
    let desempenho = vitorias-derrotas;
    if (desempenho < 1) {
        nivel = "Ferro";
    } else if (desempenho >= 11 && desempenho <= 20) {
        nivel = "Bronze";
    } else if (desempenho >= 21 && desempenho <= 50) {
        nivel = "Prata";
    } else if (desempenho >= 51 && desempenho <= 80) {
        nivel = "Ouro";
    } else if (desempenho >= 81 && desempenho <= 90) {
        nivel = "Diamante";
    } else if (desempenho >= 91 && desempenho <= 100) {
        nivel = "Lendário";
    } else if (desempenho >= 101) {
        nivel = "Imortal";
    }
    return nivel;
}

let opcao = 1;
while (opcao == 1) {
    let nome = rl.question('Digite o nome do seu heroí: ');
    let vitorias = rl.questionInt(`Digite quantas vitórias do ${nome}: `);
    let derrotas = rl.questionInt(`Digite quantas derrotas do ${nome}: `);
    let nivel = calculadora_ranking(vitorias, derrotas);
    console.log(`O Heroí de nome ${nome} está no nível de ${nivel}`)
    opcao = rl.questionInt(`Deseja recomeçar? (1- Sim, 2-Não) `);
}
console.log("Classificador finalizado");

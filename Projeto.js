function calculateLevel (wins, loses){
 // definir as variáveis
    let saldo = wins - loses
    let ranking

    if (wins < 10) {
        ranking = "Ferro";
    } else if (wins >= 11 && wins <= 20) {
        ranking = "Bronze";
    } else if (wins >= 21 && wins <= 50) {
        ranking = "Prata";
    } else if (wins >= 51 && wins <= 80) {
        ranking = "Ouro";
    } else if (wins >= 81 && wins <= 90) {
        ranking = "Diamante";
    } else if (wins >= 91 && wins <= 100) {
        ranking = "Lendário";
    } else {
        ranking = "Imortal";
    }

    console.log (`O herói tem saldo de ${saldo} e está no level ${ranking}`);
}

// Chamar a função

calculateLevel(80, 13)
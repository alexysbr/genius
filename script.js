var jogada=[]
var errou = -1;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function liga_botao_bot(i) {    
    for (var j = 0; j < i; j++) {
        document.getElementById("cor"+jogada[j]).style.background="black";    
        await sleep(j * 500);
        desliga_botao(jogada[j]);
    }
}

function desliga_botao(j) {
    if (j == 0) {
        document.getElementById("cor"+jogada[j]).style.background = 'linear-gradient(270deg, green, rgb(0, 204, 0))';
    }
    if (j == 1) {
        document.getElementById("cor"+jogada[j]).style.background = 'linear-gradient(270deg, rgb(140, 1, 1), red)';
    }
    if (j == 2) {
        document.getElementById("cor"+jogada[j]).style.background = 'linear-gradient(270deg, rgb(149, 149, 0), yellow)';
    }
    if (j == 3) {
        document.getElementById("cor"+jogada[j]).style.background = 'linear-gradient(270deg, rgb(0, 0, 255), rgb(132, 126, 255))';
    }
}

function jogo(){
    for (var i = 0; i < 50; i++) {
        jogada[i]=getRandomInt(0, 4);
        /*jogada.push(getRandomInt(0, 4));*/
    }
    /*alert(jogada[50])*/ //teste do vetor
    for (var i = 0; i < 4; i++) {
        liga_botao_bot(i);
        
            //desliga_botao(j);
        
        /*for (var j = 0; j < i; j++) {
            document.getElementById("cor"+jogada[i]).style.background="black";
        }*/
    }
}
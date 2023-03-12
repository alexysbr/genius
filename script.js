var jogada=[]
var errou = -1;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function jogo(){
    for (var i = 0; i < 50; i++) {
        jogada[i]=getRandomInt(0, 4);
        /*jogada.push(getRandomInt(0, 4));*/
    }
    /*alert(jogada[50])*/ //teste do vetor
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < i; j++) {
            document.getElementById("cor"+jogada[i]).style.background="black";
        }
        /*for (var j = 0; j < i; j++) {
            document.getElementById("cor"+jogada[i]).style.background="black";
        }*/
    }
}
var jogada=[]
var errou = -1;
var cont = 0;
var teste = -1;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function liga_botao_bot(i) {    
    for (var j = 0; j <= i; j++) {
        await sleep(250);
        if (jogada[j] == 0) {
            document.getElementById("cor"+jogada[j]).style.background = 'radial-gradient(circle, rgb(187, 255, 187), rgb(0, 204, 0))';
        }
        if (jogada[j] == 1) {
            document.getElementById("cor"+jogada[j]).style.background = 'radial-gradient(circle, rgb(252, 174, 174), red)';
        }
        if (jogada[j] == 2) {
            document.getElementById("cor"+jogada[j]).style.background = 'radial-gradient(circle, rgb(255, 255, 197), yellow)';
        }
        if (jogada[j] == 3) {            
            document.getElementById("cor"+jogada[j]).style.background='radial-gradient(circle, rgb(205, 205, 252), rgb(13, 0, 255))';  
        }
        await sleep(500);
        desliga_botao(j);
        
    }
}

function desliga_botao(j) {
    if (jogada[j] == 0) {
        document.getElementById("cor"+jogada[j]).style.background = 'linear-gradient(270deg, green, rgb(0, 204, 0))';
    }
    if (jogada[j] == 1) {
        document.getElementById("cor"+jogada[j]).style.background = 'linear-gradient(270deg, rgb(140, 1, 1), red)';
    }
    if (jogada[j] == 2) {
        document.getElementById("cor"+jogada[j]).style.background = 'linear-gradient(270deg, rgb(149, 149, 0), rgb(235, 235, 0)';
    }
    if (jogada[j] == 3) {
        document.getElementById("cor"+jogada[j]).style.background = 'linear-gradient(270deg, rgb(0, 0, 122), rgb(13, 0, 255))';
    }
}

function clicado(x){
    if (x == 0) {
        document.getElementById("cor"+ x).style.background = 'radial-gradient(circle, rgb(187, 255, 187), rgb(0, 204, 0))';
    }
    if (x == 1) {
        document.getElementById("cor"+ x).style.background = 'radial-gradient(circle, rgb(252, 174, 174), red)';
    }
    if (x == 2) {
        document.getElementById("cor"+ x).style.background = 'radial-gradient(circle, rgb(255, 255, 197), yellow)';
    }
    if (x == 3) {            
        document.getElementById("cor"+ x).style.background='radial-gradient(circle, rgb(205, 205, 252), rgb(13, 0, 255))';  
    }
    cont++;
    teste = x;
}

function desclicado(x){
    if (x == 0) {
        document.getElementById("cor"+ x).style.background = 'linear-gradient(270deg, green, rgb(0, 204, 0))';
    }
    if (x == 1) {
        document.getElementById("cor"+ x).style.background = 'linear-gradient(270deg, rgb(140, 1, 1), red)';
    }
    if (x == 2) {
        document.getElementById("cor"+ x).style.background = 'linear-gradient(270deg, rgb(149, 149, 0), rgb(235, 235, 0))';
    }
    if (x == 3) {
        document.getElementById("cor"+ x).style.background = 'linear-gradient(270deg, rgb(0, 0, 122), rgb(13, 0, 255))';
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
        cont = 0;
        /*while (cont <= i) {
            //if (errou == -1){
               /* if(jogada[cont] != teste && teste != -1) {
                    errou = 1;
                    break;
                }*/
            //}
           /* if (errou == 1) {
                alert("Errou");
            }*/
       // }*/
    }
}
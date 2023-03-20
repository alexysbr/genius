var jogada=[];
var cont_cpu = 0;
var cont_jogador = 0;
var escolha;
var escolhido = 5;
const facil = 5;
const normal = 15;
const dificil = 30;


/*var cor_0 = document.getElementById("cor0");
var cor_1 = document.getElementById("cor1");
var cor_2 = document.getElementById("cor2");
var cor_3 = document.getElementById("cor3");

/*console.log(cor0);*/
/*
cor_0.addEventListener('mousedown', (event) => {
    document.getElementById("cor0").style.background = 'radial-gradient(circle, rgb(187, 255, 187), rgb(0, 204, 0))';
    teste = 0;
    console.log(teste);
    return true;
})
cor_0.addEventListener('mouseup', (event) => {
    document.getElementById("cor0").style.background = 'linear-gradient(270deg, green, rgb(0, 204, 0))';
})
cor_1.addEventListener('mousedown', (event) => {
    document.getElementById("cor1").style.background = 'radial-gradient(circle, rgb(252, 174, 174), red)';
    teste = 1;
})
cor_1.addEventListener('mouseup', (event) => {
    document.getElementById("cor1").style.background = 'linear-gradient(270deg, rgb(140, 1, 1), red)';
})
cor_2.addEventListener('mousedown', (event) => {
    document.getElementById("cor2").style.background = 'radial-gradient(circle, rgb(255, 255, 197), yellow)';
    teste = 2;
})
cor_2.addEventListener('mouseup', (event) => {
    document.getElementById("cor2").style.background = 'linear-gradient(270deg, rgb(149, 149, 0), rgb(235, 235, 0)';
})
cor_3.addEventListener('mousedown', (event) => {
    document.getElementById("cor3").style.background='radial-gradient(circle, rgb(205, 205, 252), rgb(13, 0, 255))';  
    teste = 3;
})
cor_3.addEventListener('mouseup', (event) => {
    document.getElementById("cor3").style.background = 'linear-gradient(270deg, rgb(0, 0, 122), rgb(13, 0, 255))';
})*/



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
            document.getElementById("cor"+jogada[j]).style.background='radial-gradient(circle, rgb(205, 205, 252), rgb(100, 92, 255))';  
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
        document.getElementById("cor"+jogada[j]).style.background = 'linear-gradient(270deg, rgb(190, 0, 0), rgb(253, 48, 48))';
    }
    if (jogada[j] == 2) {
        document.getElementById("cor"+jogada[j]).style.background = 'linear-gradient(270deg, rgb(149, 149, 0), rgb(235, 235, 0)';
    }
    if (jogada[j] == 3) {
        document.getElementById("cor"+jogada[j]).style.background = 'linear-gradient(270deg, rgb(0, 0, 211), rgb(103, 95, 255))';
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
        document.getElementById("cor"+ x).style.background='radial-gradient(circle, rgb(205, 205, 252), rgb(100, 92, 255))';  
    }
    
    

    if(x != jogada[cont_jogador]){
        cont_jogador = -1;
        alert('Errou!');
        location.reload(false);
    }    
    if(cont_jogador == cont_cpu){
        cont_cpu++;
        liga_botao_bot(cont_cpu);           
        cont_jogador = -1;   
    }
    cont_jogador++; 
    var turno = document.getElementById('turno');
    turno.innerHTML = cont_cpu+1;
    var vez = document.getElementById('vez');
    vez.innerHTML = cont_jogador;
    

    if(escolhido == cont_cpu){
        alert('Vitória!');
        location.reload(false);
    }
    
    console.log('cpu '+cont_cpu);  
    console.log('jogador '+cont_jogador);
}

function desclicado(x){
    if (x == 0) {
        document.getElementById("cor"+ x).style.background = 'linear-gradient(270deg, green, rgb(0, 204, 0))';
    }
    if (x == 1) {
        document.getElementById("cor"+ x).style.background = 'linear-gradient(270deg, rgb(190, 0, 0), rgb(253, 48, 48))';
    }
    if (x == 2) {
        document.getElementById("cor"+ x).style.background = 'linear-gradient(270deg, rgb(149, 149, 0), rgb(235, 235, 0))';
    }
    if (x == 3) {
        document.getElementById("cor"+ x).style.background = 'linear-gradient(270deg, rgb(0, 0, 211), rgb(103, 95, 255))';
    }
}

function jogo(){
    for (var i = 0; i < 50; i++) {
        jogada[i]=getRandomInt(0, 4);
        /*jogada.push(getRandomInt(0, 4));*/
    }
    /*alert(jogada[50])*/ //teste do vetor
    escolha = document.getElementsByName('rad')
    if(escolha[0].checked){
        escolhido = facil;    
        document.getElementById('total').innerHTML = facil;
    }
    if(escolha[1].checked){
        escolhido = normal;
        document.getElementById('total').innerHTML = normal;
    }
    if(escolha[2].checked){
        escolhido = dificil;
        document.getElementById('total').innerHTML = dificil;
    }
    console.log(escolhido);
    liga_botao_bot(0);
    var turno = document.getElementById('turno');
    turno.innerHTML = cont_cpu+1;
    /*for (var i = 0; i < 4; i++) {
        liga_botao_bot(i);
        /*cont = 0;
        if(cont <= i && jogada[i] == teste){
            cont++;
        }*/
        //console.log("OK"+1);
        /*for (var j = 0; j < 4; j++) {
            if(cor_0.addEventListener('mousedown', (event) => {
                document.getElementById("cor0").style.background = 'radial-gradient(circle, rgb(187, 255, 187), rgb(0, 204, 0))';
                teste = 0;
                console.log(teste);
                return true;
            })){
                console.log("OK"+1);
            }
         }
        //cont = 0;
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
    //}
}
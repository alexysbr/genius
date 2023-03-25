var jogada=[];
var cont_cpu = 0;
var cont_jogador = 0;
var escolha;
var escolhido = 5;
const facil = 5;
const normal = 15;
const dificil = 30;

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
            let audio = document.getElementById("clip1");
            audio.play();
        }
        if (jogada[j] == 1) {
            document.getElementById("cor"+jogada[j]).style.background = 'radial-gradient(circle, rgb(252, 174, 174), red)';
            let audio = document.getElementById("clip2");
            audio.play();
        }
        if (jogada[j] == 2) {
            document.getElementById("cor"+jogada[j]).style.background = 'radial-gradient(circle, rgb(255, 255, 197), yellow)';
            let audio = document.getElementById("clip3");
            audio.play();
        }
        if (jogada[j] == 3) {            
            document.getElementById("cor"+jogada[j]).style.background='radial-gradient(circle, rgb(205, 205, 252), rgb(100, 92, 255))';  
            let audio = document.getElementById("clip4");
            audio.play();
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
        let audio = document.getElementById("clip1");
        audio.play();
    }
    if (x == 1) {
        document.getElementById("cor"+ x).style.background = 'radial-gradient(circle, rgb(252, 174, 174), red)';
        let audio = document.getElementById("clip2");
        audio.play();
    }
    if (x == 2) {
        document.getElementById("cor"+ x).style.background = 'radial-gradient(circle, rgb(255, 255, 197), yellow)';
        let audio = document.getElementById("clip3");
        audio.play();
    }
    if (x == 3) {            
        document.getElementById("cor"+ x).style.background='radial-gradient(circle, rgb(205, 205, 252), rgb(100, 92, 255))';  
        let audio = document.getElementById("clip4");
        audio.play();
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
    for (var i = 0; i < dificil; i++) {
        jogada[i]=getRandomInt(0, 4);
        /*jogada.push(getRandomInt(0, 4));*/
    }
    /*alert(jogada[5])*/ //teste do vetor
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
}
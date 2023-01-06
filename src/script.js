var playerpoints = 0, iapoints = 0, iaoption , playeroption;


function select (op,users) {
    document.getElementById(users+'-option-'+op).classList.add('selected');
}

function unselect (op, users) {
    document.getElementById(users+'-option-'+op).classList.remove('selected');
}

function message(text) {
    document.getElementById('message').innerHTML=text;
  
}

function playerPoints () {
    playerpoints++;
    document.getElementById('player-points').innerHTML=playerpoints;
}

function iaPoints () {
    iapoints++;
    document.getElementById('ia-points').innerHTML=iapoints;
}

function iaPlays(max, min) { 
    return Math.floor(Math.random() * 3 + 1);
}

function play(op) {
    playeroption = op;
    select(playeroption, 'player')

    iaoption = iaPlays()
    select(iaoption, 'ia')

    if (playeroption == 1 && iaoption == 1)
    {
        message('ocorreu um empate!!');
    } else if(playeroption == 1 && iaoption == 2){
        playerPoints()
        message('ponto para você jogador')
    }else if (playeroption == 1 && iaoption == 3) {
        iaPoints()
        message('ponto para a maquina!!')
    }else if (playeroption == 2 && iaoption == 1) {
        iaPoints()
        message('ponto para a maquina!!')
    }else if (playeroption == 2 && iaoption == 2) {
        message('ocorreu um empate!!');
    }else if (playeroption == 2 && iaoption == 3) {
        playerPoints()
        message('ponto para você jogador')
    }else if (playeroption == 3 && iaoption == 1) {
        playerPoints()
        message('ponto para você jogador')
    }else if (playeroption == 3 && iaoption == 2) {
        iaPoints()
        message('ponto para a maquina!!')
    }else if (playeroption == 3 && iaoption == 3) {
        message('ocorreu um empate!!');
    }


    setTimeout(function() {
        unselect(playeroption ,'player');
        unselect(iaoption ,'ia');
        message('jogador escolha uma opção...');
      }, 3500);

}

setTimeout(function(){
    document.getElementById('player-option-1').onclick = function () {play(1)}
    document.getElementById('player-option-2').onclick = function () {play(2)}
    document.getElementById('player-option-3').onclick = function () {play(3)}
} , 3500)


message('Bem-vindo caro jogador, você está preparado? Escolha uma opção...');
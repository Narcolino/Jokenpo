/*declaração de variaveis */ 
var playerpoints = 0, iapoints = 0, iaoption , playeroption;

/*declaração da função select, ela faz com que as imagens sejam selecionadas, adicionando a elas uma classe*/
function select (op,users) {
    document.getElementById(users+'-option-'+op).classList.add('selected');
}

/*declaração da função unselect, ela faz com que as imagens sejam deselecionadas, retirando delas uma classe*/
function unselect (op, users) {
    document.getElementById(users+'-option-'+op).classList.remove('selected');
}

/*função message que por meio do doom faz com que os textos sejam escritos na caixa*/
function message(text) {
    document.getElementById('message').innerHTML=text;
  
}

/*função que alterará o valor da pontuação de cada jogador*/
function playerPoints () {
    playerpoints++;
    document.getElementById('player-points').innerHTML=playerpoints;
}

function iaPoints () {
    iapoints++;
    document.getElementById('ia-points').innerHTML=iapoints;
}

/*função que irá sortear um numero para a ia*/
function iaPlays(max, min) { 
    return Math.floor(Math.random() * 3 + 1);
}

/*função principal que realiza toda a logica do jogo*/
function play(op) {
    playeroption = op;
    select(playeroption, 'player')

    iaoption = iaPlays()
    select(iaoption, 'ia')

    if (playeroption == 1 && iaoption == 1)
    {
        message('Ocorreu um empate!!');
    } else if(playeroption == 1 && iaoption == 2){
        playerPoints()
        message('Ponto para você jogador')
    }else if (playeroption == 1 && iaoption == 3) {
        iaPoints()
        message('Ponto para a maquina!!')
    }else if (playeroption == 2 && iaoption == 1) {
        iaPoints()
        message('Ponto para a maquina!!')
    }else if (playeroption == 2 && iaoption == 2) {
        message('Ocorreu um empate!!');
    }else if (playeroption == 2 && iaoption == 3) {
        playerPoints()
        message('Ponto para você jogador')
    }else if (playeroption == 3 && iaoption == 1) {
        playerPoints()
        message('ponto para você jogador')
    }else if (playeroption == 3 && iaoption == 2) {
        iaPoints()
        message('Ponto para a maquina!!')
    }else if (playeroption == 3 && iaoption == 3) {
        message('Ocorreu um empate!!');
    }


    setTimeout(function() {
        unselect(1 ,'player');
        unselect(1 ,'ia');
        unselect(2 ,'player');
        unselect(2 ,'ia');
        unselect(3 ,'player');
        unselect(3 ,'ia');
        message('Jogador escolha uma opção...');
      }, 3500);

}

/*chamada das funções atraves do onclick*/
document.getElementById('player-option-1').onclick = function () {play(1)}
document.getElementById('player-option-2').onclick = function () {play(2)}
document.getElementById('player-option-3').onclick = function () {play(3)}


/*mensagem de inicio*/
message('Bem-vindo caro jogador, você está preparado? Escolha uma opção...');
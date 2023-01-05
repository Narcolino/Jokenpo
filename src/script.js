
function select (op,users) {
    document.getElementById(users+'-option-'+op).classList.add('selected');
   
}

function unselect (op, users) {
    document.getElementById(users+'-option-'+op).classList.remove('selected');
}

function message(text) {
    document.getElementById('message').innerHTML=text
  
}

document.getElementById('player-option-1').onclick = function () {}
document.getElementById('player-option-2').onclick = function () {}
document.getElementById('player-option-3').onclick = function () {}

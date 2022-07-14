const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const lamp = document.getElementById ('lamp');

//verifica se a lampada esta quebrada
function isLampBroken() {
    return lamp.src.indexOf ('quebrada' ) > -1
}

//lampada ligada, caso não esteja quebrada
function lampOn() {
    if ( !isLampBroken() ) {
        lamp.src = './img/ligada.jpg';
    }
}

//lampada desligada, caso não esteja quebrada
function lampOff() {
    if ( !isLampBroken() ) {
        lamp.src = './img/desligada.jpg';
    }
}

//lampada quebrada
function lampBroken() {
    lamp.src = './img/quebrada.jpg';
}

//pega evento de click nos botoes
turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);

//pega o evento de passar o mouse por cima da lampada
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);

//pega o evento de 2 clicks na lampada
lamp.addEventListener ('dblclick', lampBroken);
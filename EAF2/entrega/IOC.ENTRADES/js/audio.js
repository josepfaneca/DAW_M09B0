let audio = document.getElementById('player');

/*const incrementVolume = function(value) {
    value < 1 ? (value * 10 + 1) / 10 : value;
}*/

const incrementVolume = value => 
    value < 1 ? (value * 10 + 1) / 10 : value;

const decrementVolume = value => 
    value > 0 ? (value * 10 - 1) / 10 : value;    


function playAudio() {
    audio.play();
}

function pauseAudio() {
    audio.pause();
}

function volumUp() {
    audio.muted = false;
    audio.volume = incrementVolume(audio.volume);
}

function volumDown() {
    audio.muted = false;
    audio.volume = decrementVolume(audio.volume);
}

function volumMute() {
    audio.muted = true;
}

function rewind(){
    audio.currentTime =  audio.currentTime - 3;
}

function forward(){
    audio.currentTime =  audio.currentTime + 3;
}



document.addEventListener(
  "DOMContentLoaded",
  function () {
    startplayer();
  },
  false
);
let player;
let span = document.getElementById("volume-number");

function startplayer() {
  player = document.getElementById("music_player");
  player.controls = false;
}

function play_aud() {
  player.play();

  player.loop = true;
}
function pause_aud() {
  player.pause();
}
function stop_aud() {
  player.pause();
  player.currentTime = 0;
}
function replay_aud() {
  player.currentTime = 0;
  play_aud();
}
function change_vol() {
  let volume = document.getElementById("change_vol");
  player.volume = volume.value;
  span.textContent = volume.value * 100;
}
// make a function to toggle the volume number to hidden
function toggleVolumeNumber() {
   
  if (span.classList.contains("shown") === false) {
      span.classList.add("shown");
   
  } else {
    span.classList.remove("shown");
    span.classList.add("hidden");
  }

}

function toggleVolumeNumber2() {
   
    if (span.classList.contains("shown") === false) {
      span.classList.add("shown");
      span.classList.remove('hidden')
    } 
  
  }
  


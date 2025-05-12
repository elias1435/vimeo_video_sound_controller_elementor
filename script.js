document.addEventListener("DOMContentLoaded", function () {
  var iframe = document.querySelector('#vimeo-bg iframe');
  var button = document.getElementById('toggle-sound');
  
  if (!iframe) return;

  var player = new Vimeo.Player(iframe);

  // Make sure it's muted by default
  player.setVolume(0);

  let isMuted = true;

  button.addEventListener('click', function () {
    if (isMuted) {
      player.setVolume(1);
      button.textContent = "STOP";
    } else {
      player.setVolume(0);
      button.textContent = "LISTEN";
    }
    isMuted = !isMuted;
  });
});


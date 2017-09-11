var playButton, pauseButton, previousEpisodeButton, nextEpisodeButton, buttomControl, fullScreenButton;

getDOM = function() {
  playButton = document.getElementById('player-ctrl-play');
  pauseButton = document.getElementById('player-ctrl-pause');
  previousEpisodeButton = document.getElementById('player-ctrl-prev-ep');
  nextEpisodeButton = document.getElementById('player-ctrl-next-ep');
  fullScreenButton = document.getElementById('player-ctrl-full-screen');
  buttonControl = document.getElementById
}

fullScreenEnable = function() {
  // fullScreenButton.click();
}

playMovie = function() {
  playButton.click();
}

hideUI = function() {
  playButton.style.display = 'none';
  pauseButton.style.display = 'none';
  previousEpisodeButton.style.display = 'none';
  nextEpisodeButton.style.display = 'none';
}

goPreviousEpisode = function() {
  window.location.href = previousEpisodeButton.href;
}

goNextEpisode = function() {
  window.location.href = nextEpisodeButton.href;
}

var movieLength;

// onload で呼ぶ
initialize = function() {
  getDOM();
  fullScreenEnable();
  playMovie();
  // 念のため存在チェック
  if(document.getElementById('player-ctrl-movie-len') != null) {
    movieLength = document.getElementById('player-ctrl-movie-len').textContent;
    if(movieLength !== '00:00:00') {
      setTimeout(hideUI, 5000);
      endCheck();
    }
    else setTimeout(initialize, 5000);
  }
  else setTimeout(initialize, 1000);
}

endCheck = function() {
  currentPosition = document.getElementById('player-ctrl-current-pos').textContent;
  console.log(currentPosition);

  if(movieLength === currentPosition) {
    goNextEpisode();
  }

  setTimeout(endCheck, 1000);
}

initialize();

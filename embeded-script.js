window.AnitelePlus = {
  goPreviousEpisode: function() {
    var previousEpisodeButton = document.getElementById('player-ctrl-prev-ep');
    window.location.href = previousEpisodeButton.href;
  },
  goNextEpisode: function() {
    var nextEpisodeButton = document.getElementById('player-ctrl-next-ep');
    window.location.href = nextEpisodeButton.href;
  }
};

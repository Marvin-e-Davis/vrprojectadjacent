//data structure to hold video urls

var key = 'Steins Gate'

var objects = new Map([
  ['Haikyuu', 'XS-N8KfZ5EU'],
  ['Gurren Lagann','FwgMxjhXkKo'],
  ['FMAB', '6KvizlgJu14'],
  ['Death Note','8QE9cmfxx4s'],
  ['HxH', 'faqmNf_fZlE'],
  ['Steins Gate', 'dd7BILZcYAY']
]);

var value = objects.get(key);

//youtube api stuff

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: value,
          playerVars: {
            'playsinline': 1,
            'autoplay' : 1
          },
          events: {
            'onReady': onPlayerReady
          }
        });
      }
      function onPlayerReady(event) {
        event.target.playVideo();
      }

var show = document.createElement("h2");
show.innerText = key;
var player = document.querySelector("player");
player.appendChild(show);

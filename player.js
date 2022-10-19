let player;
const playercontainer = $('.presentation__main');

let eventsInit = () => {
  $(".presentation__start").click(e => {
    e.preventDefault();
  
    if (playercontainer.hasClass("paused")) {
      playercontainer.removeClass("paused");
      player.pauseVideo();
    } else {
      playercontainer.addClass("paused");
      player.playVideo();
    }
  });

$('.presentation__video-reg').click(e => {
  const bar = $(e.currentTarget);
  const clickedposition = e.originalEvent.layerX;
  const newbuttonpositionpercent = (clickedposition / bar.width()) * 100;
const newplaybackposition = (player.getDuration() / 100) * newbuttonpositionpercent;

  $('.presentation__regulator').css({
    left: `${newbuttonpositionpercent}%`
  });
  player.seekTo(newplaybackposition);
});

 };

const formattime = timesec => {
  const roundtime = Math.round(timesec);

  const minutes = addzero(Math.floor(roundtime / 60));
  const seconds = addzero(roundtime - minutes * 60);

  function addzero(num) {
    return num < 10 ? `0${num}` : num;
  }

  return `${minutes} : ${seconds}`;
};

 const onPlayerReady = () => {
  let interval;
  const durationsec = player.getDuration();


  if (typeof interval !== 'undefined') {
    clearInterval(interval);
  }

  interval = setInterval(() => {
  const completedsec = player.getCurrentTime();
  const completedpercent = (completedsec / durationsec) * 100;

 $('.presentation__regulator').css({
  left: `${completedpercent}%`
 });
}, 1000);
 };

// Volume

//  const volumereg = () => {
  $('.presentation__volume-track').click(e => {
    const barvol = $(e.currentTarget);
    const clickedpositionvol = e.originalEvent.layerX;
    const newbuttonpositionpercentvol = (clickedpositionvol / barvol.width()) * 100;
  
    $('.presentation__vol-regulator').css({
      left: `${newbuttonpositionpercentvol}%`
    });
    player.setVolume(newbuttonpositionpercentvol);
  });
// Volume

  // const onPlayerStateChange = event => {
  //   switch (event.data) {
  //     case 1:
  //       playercontainer.addClass('active');
  //       break;

  //     case 2:
  //       playercontainer.removeClass('active');
  //       break;
  //   }
  // }
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('youtube', {
          height: '393',
          width: '662',
          videoId: 'M7lc1UVf-VE',
          events: {
            'onReady': onPlayerReady,
            // 'onStateChange': onPlayerStateChange
          },
          playerVars: {
            controls: 0,
            disablekb: 0,
            showinfo: 0,
            rel: 0,
            autoplay: 0,
            modestbranding: 0,
            color: 'white'
          }
        });
      }
      eventsInit();
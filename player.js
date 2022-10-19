let player;
const playercontainer = $('.presentation__scale')
let eventsinit = () =>{
  $('.presentation__start').click(e => {
    e.preventDefault();

    const btn = $(e.currentTarget);
    playercontainer.addClass('paused');
    player.playVideo();
  })
}
      function onYouTubeIframeAPIReady() {
        player = new YT.Player($('.presentation__youtube')[0], {
          height: '393',
          width: '662',
          videoId: 'tGc9n1lc21Q',
          events: {
            // 'onReady': onPlayerReady,
            // 'onStateChange': onPlayerStateChange
          },
          playerVars: {
            controls: 0,
            disablekb: 0,
            showinfo: 0,
            rel: 0,
            autoplay: 0,
            modestbranding: 0
          }
        });
      }
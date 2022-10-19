const sections = $('.section');
const display = $('.main-content');

let inscroll = false;

sections.first().addClass ('active');

const performtransition = sectioneq => {

  if (inscroll == false) {
    inscroll == true;
  const position = sectioneq * -100;
  const currentsection = sections.eq(sectioneq);
  const menutheme = currentsection.attr('data-sidemenu-theme');
  const sidemenu = $('.links');

  if (menutheme == 'black') {
    sidemenu.addClass('links--black');
  } else {
    sidemenu.removeClass('links--black');
  }

  display.css({
    transform: `translateY(${position}%)`
  });

  sections.eq(sectioneq).addClass('active').siblings().removeClass('active');
 
  

  setTimeout(() => {
    inscroll = false;
    sidemenu.find('.links__item').eq(sectioneq).addClass('links__item--active').siblings().removeClass('links__item--active');
  }, 1300);
}
}

const scrollviewport = direction =>{
    const activesection = sections.filter('.active');
    const nextsection = activesection.next();
    const prevsection = activesection.prev();
  if (direction == 'next' && nextsection.length) {
    performtransition(nextsection.index());
  }
  if (direction == 'prev' && prevsection.length) {
    performtransition(prevsection.index());
  }
}

$(window).on('wheel', e=> {
  const deltaY = e.originalEvent.deltaY;
  if (deltaY > 0) {
    scrollviewport('next');
  }

  if (deltaY < 0) {
    scrollviewport('prev');
  }
});

$(window).on ('keydown', (e)=> {

  const tagname = e.target.tagName.toLowerCase();

  if (tagname != 'input' && tagname != 'textarea') {

  switch (e.keyCode) {
    case 38:
    scrollviewport('prev');
    break;
    case 40:
      scrollviewport('next');
    break;
  }
}
});

$('[data-scroll-to]').click(e => {
  e.preventDefault();

  const $this = $(e.currentTarget);
  const target = $this.attr('data-scroll-to');
  const reqsection = $(`[data-section-id=${target}]`);
  
  performtransition(reqsection.index());
})
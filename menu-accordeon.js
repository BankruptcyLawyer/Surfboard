const mesurewidth = Item => {
  const screenwidth = $(window).width();
  const Container = Item.closest('.menu__list');
  const titlesblock = Container.find('.menu__item-link');
  const titleswidth = titlesblock.width() * titlesblock.length;
  const ismobile = window.matchMedia('(max-width: 768px)').matches;

  if (ismobile) {
    return screenwidth - titleswidth;
  } else {
    return 500;
  }
}
const closeeveryitemincontainer = (Container) => {
  const Items = Container.find('.menu__item');
  const content = Container.find('.menu__content');

  Items.removeClass('menu__active');

  content.width(0);
}
const openItem = (Item) => {
  const hiddencontent = Item.find('.menu__content');
  const reqwidth = mesurewidth(Item);
  Item.addClass('menu__active');

  hiddencontent.width(reqwidth);
}
$('.menu__item-link').on('click', e => {
  e.preventDefault();

  const $this = $(e.currentTarget);
  const Item = $this.closest('.menu__item');
  const itemopened = Item.hasClass('menu__active');
  const Container = $this.closest('.menu__list');

  if (itemopened) {
    closeeveryitemincontainer(Container);
  } else {
    closeeveryitemincontainer(Container);
    openItem(Item);
  }
});
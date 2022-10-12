const openitem = (item) => {
  const container = item.closest(".team__item");
  const activatetriangle = container.find(".team__triangle");
  const contentblock = container.find(".team__content");
  const textblock = contentblock.find(".team__content-block");
  const reqheight = textblock.height();

  container.addClass('active');
  contentblock.height(reqheight);
  activatetriangle.addClass("active__triangle")
};

  const closeitem = (container) =>{
    const items = container.find(".team__content");
    const itemcontainer = container.find('.team__item');
    const triangle = container.find('.team__triangle');

    itemcontainer.removeClass('active');
    items.height(0);
    triangle.removeClass('active__triangle');
  };

$('.team__name').click((e) => {
  e.preventDefault();
  const $this = $(e.currentTarget);
  const container = $this.closest('.team');
  const elemcontainer = $this.closest('.team__item');

  if (elemcontainer.hasClass('active')) {
    closeitem(container);
  } else {
    closeitem(container);
    openitem($this);
  };

})
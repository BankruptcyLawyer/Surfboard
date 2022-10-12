const findBlock = (alias) =>{
  return $(".reviews__review").filter((ndx, item)=>{
    return $(item).attr("data-linked") == alias;
  })
}
$(".reviews__link").click((e)=>{
  e.preventDefault();
  const $this = $(e.currentTarget);
  const target = $this.attr("data-open");
  const itemtoshow = findBlock(target);
  const curItem = $this.closest(".reviews__person");

  itemtoshow.addClass("active").siblings().removeClass("active");
  curItem.addClass("active").siblings().removeClass("active");
})

class Slider {
  constructor(selector, settings = {}){
    this.slider = document.querySelector(selector);
    this.current = 1;
    this.slideCount = this.slider.children.length;
    this.settings = settings;
  }

  next (){
    if(this.current < this.slideCount){
      this.current++;
    } else {
      this.current = 1;
    }
    this.translate();
  }
  prev(){
    if(this.current > 1){
    this.current--;
    } else {
      this.current = this.slideCount;
    }
    this.translate();
  }
  translate() {
    this.slider.style.transform = `translateX(-${(this.current - 1) * 100}%)`;
  }

  setEventListener(){
    const buttonSlideRight = document.querySelector('.arrow__right');
    const buttonSlideLeft = document.querySelector('.arrow__left');
    buttonSlideRight.addEventListener('click', () =>{
      this.next();
      event.preventDefault();
    })
    buttonSlideLeft.addEventListener('click', () =>{
      this.prev();
      event.preventDefault();
    })
  }
  init(){
    if (this.settings.transition) {
      this.slider.style.transition = `${this.settings.transition}ms`
    }
    this.setEventListener();
  }
}
const slider = new Slider('#slider', {
  transition: 1000,
});
slider.init();
let mymap;

const init = () => {
  mymap = new ymaps.Map(('map'), {
    center: [55.752004, 37.576133],
    zoom: 11,
    controls: []
  });

  const coords = [
    [55.752004, 37.576133]
  ];

  const myCollection = new ymaps.GeoObjectCollection({}, {
    draggable: false,
    iconLayout: 'default#image',
    iconImageHref: "./img/Hello/Vector.png",
    iconImageSize: [46, 57],
    iconImageOffset: [-35, -52]
  });

  coords.forEach(coord => {
    myCollection.add(new ymaps.Placemark(coord));
  });

  mymap.geoObjects.add(myCollection);

  mymap.behaviors.disable('scrollZoom');
}

ymaps.ready(init);
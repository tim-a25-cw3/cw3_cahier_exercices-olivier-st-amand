import Icons from './utils/Icons.js';

import Swiper from 'swiper/bundle';

class Main {
  constructor() {
    this.init();
  }

  init() {
    Icons.load();

    this.initSwiperPagination();
  }

  initSwiperPagination() {
    const target = document.querySelector('.js-swiper-pagination');
    /*IL FAUT LE METTRE AVANT */
    if (target) {
      const swiper = new Swiper(target, {
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          slidesPerView: 1,
          clickable: true,
        },
      });
    }
  }
}
new Main();

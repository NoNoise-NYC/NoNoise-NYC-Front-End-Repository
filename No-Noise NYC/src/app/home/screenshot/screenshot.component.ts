import { Component, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions, EffectCards  } from 'swiper';
SwiperCore.use([EffectCards]);
@Component({
  selector: 'app-screenshot',
  templateUrl: './screenshot.component.html',
  styleUrls: ['./screenshot.component.scss']
})
export class ScreenshotComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public slides = [
    { img: 'assets/images/ss/1.png'},
    { img: 'assets/images/ss/2.png'},
    { img: 'assets/images/ss/3.png'},
    { img: 'assets/images/ss/4.png'},
    { img: 'assets/images/ss/1.png'},
    { img: 'assets/images/ss/2.png'},
  ]

  public config: SwiperOptions = {
    effect: 'coverflow',
    grabCursor: true,
    initialSlide: 2,
    centeredSlides: true,
    loop: true,
    spaceBetween: 0,
    slidesPerView: 4.84,
    pagination: false,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 1,
        slideShadows: false,
    },
    autoplay: {
        delay: 5000,
    },
    breakpoints: {
        360: {
            slidesPerView: 1,
            coverflowEffect: {
                depth: 50,
                modifier: 0,
            },
        },
        640: {
          slidesPerView: 4.84,
            coverflowEffect: {
                depth: 0,
                modifier: 0,
            },
        }
    }
};

}

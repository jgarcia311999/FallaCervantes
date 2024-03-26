import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
})
export class SwiperComponent   {

  constructor() { }

  @Input() imagenes: string[] = [];

}

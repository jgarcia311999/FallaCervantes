import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent {

  constructor() { }

  imagenesFallaGrande: string[] = [
    'assets/images/fallaGrande1.jpg',
    'assets/images/fallaGrande2.jpg',
    'assets/images/fallaGrande3.jpg',
    'assets/images/fallaGrande4.jpg',
    'assets/images/fallaGrande5.jpg',
    'assets/images/fallaGrande6.jpg',
    'assets/images/fallaGrande7.jpg',
    'assets/images/fallaGrande8.jpg',
    'assets/images/fallaGrande9.jpg',
    'assets/images/fallaGrande10.jpg'
  ];

  imagenesFallaPequena: string[] = [
    'assets/images/fallaPeqquenya1.jpg',
    'assets/images/fallaPeqquenya2.jpg',
    'assets/images/fallaPeqquenya3.jpg',
    'assets/images/fallaPeqquenya4.jpg',
    'assets/images/fallaPeqquenya5.jpg',
    'assets/images/fallaPeqquenya6.jpg',
    'assets/images/fallaPeqquenya7.jpg',
    'assets/images/fallaPeqquenya8.jpg',
    'assets/images/fallaPeqquenya9.jpg',
    'assets/images/fallaPeqquenya10.jpg',
  ];

}

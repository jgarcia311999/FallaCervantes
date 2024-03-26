import { Component } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page  {

  constructor() { }

  photos: string[] = [
    'assets/images/fallaGrande1.jpg',
    'assets/images/fallaGrande2.jpg',
    'assets/images/fallaGrande3.jpg',
    'assets/images/fallaGrande4.jpg',
    'assets/images/fallaGrande5.jpg',
    'assets/images/fallaGrande6.jpg',
    'assets/images/fallaGrande7.jpg',
    'assets/images/fallaGrande8.jpg',
    'assets/images/fallaGrande9.jpg'
    ];

  primeraLinea: string = 'Som '
  primeraPalabra: string = 'xics i xiques'
  segundaLinea: string = 'vine al nostre  '
  segundaPalabra: string = 'casal'

}

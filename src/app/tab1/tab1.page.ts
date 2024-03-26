import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() { }
  fechaSeleccionada: string | undefined; // Define la propiedad fechaSeleccionada
  eventoSeleccionado: any = {}; // Objeto para almacenar el evento asociado a la fecha seleccionada

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
    'assets/images/fallaPeqqueña1.jpg',
    'assets/images/fallaPeqqueña2.jpg',
    'assets/images/fallaPeqqueña3.jpg',
    'assets/images/fallaPeqqueña4.jpg',
    'assets/images/fallaPeqqueña5.jpg',
    'assets/images/fallaPeqqueña6.jpg',
    'assets/images/fallaPeqqueña7.jpg',
    'assets/images/fallaPeqqueña8.jpg',
    'assets/images/fallaPeqqueña9.jpg',
    'assets/images/fallaPeqqueña10.jpg',
  ];

  primeraLinea: string = 'Sóc de la '
  primeraPalabra: string = 'falla'
  segundaLinea: string = 'de la falla del '
  segundaPalabra: string = 'mercat'

  

  

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}

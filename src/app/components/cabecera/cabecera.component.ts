import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss'],
})
export class CabeceraComponent   {

  constructor() { }

  @Input() primeraLinea: string = '';
  @Input() segundaLinea: string = '';

  @Input() primeraPalabra: string = '';
  @Input() segundaPalabra: string = '';

}

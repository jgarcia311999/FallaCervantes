import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  segmentValue: string = 'avisos';
  showInfo: boolean = false;
  constructor() { }

  primeraLinea: string = 'Sóc de la '
  primeraPalabra: string = 'falla'
  segundaLinea: string = 'de la falla del '
  segundaPalabra: string = 'mercat'

  toggleShowInfo() {
    this.showInfo = !this.showInfo;
  }

}

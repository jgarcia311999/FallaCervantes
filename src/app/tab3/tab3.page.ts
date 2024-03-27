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

  primeraLinea: string = 'i si vols '
  primeraPalabra: string = 'marxa'
  segundaLinea: string = 'vine al '
  segundaPalabra: string = 'casal'

  toggleShowInfo() {
    this.showInfo = !this.showInfo;
  }

}

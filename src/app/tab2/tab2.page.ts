import { Component } from '@angular/core';

interface Evento {
  titulo: string;
  descripcion: string;
}

interface FechaDestacada {
  date: string;
  textColor: string;
  backgroundColor: string;
  eventos: Evento[];
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  fechaSeleccionada: string | undefined;
  fechaDestacadaSeleccionada: FechaDestacada | undefined;
  highlightedDates: FechaDestacada[] = [
    {
      date: '2024-03-31',
      textColor: 'rgb(251, 165, 35)',
      backgroundColor: '#000066',
      eventos: [
        { titulo: "Evento mejorado 1", descripcion: "Decripcion mejorado 1" },
        { titulo: "Evento mejorado 1.2", descripcion: "Decripcion mejorado 1.2" }
      ]
    },
    {
      date: '2024-03-24',
      textColor: 'rgb(251, 165, 35)',
      backgroundColor: '#000066',
      eventos: [
        { titulo: "Evento mejorado 2", descripcion: "Decripcion mejorado 2" },
        { titulo: "Evento mejorado 2.2", descripcion: "Decripcion mejorado 2.2" }
      ]
    },
    {
      date: '2024-03-16',
      textColor: 'rgb(251, 165, 35)',
      backgroundColor: '#000066',
      eventos: [
        { titulo: "Evento mejorado 3", descripcion: "Decripcion mejorado 3" },
        { titulo: "Evento mejorado 3.2", descripcion: "Decripcion mejorado 3.2" }
      ]
    },
    {
      date: '2024-03-10',
      textColor: 'rgb(251, 165, 35)',
      backgroundColor: '#000066',
      eventos: [
        { titulo: "Evento mejorado 4", descripcion: "Decripcion mejorado 4" },
        { titulo: "Evento mejorado 4.2", descripcion: "Decripcion mejorado 4.2" }
      ]
    }
  ];


  

  constructor() { }

  mostrarInformacionMejorada() {
    // Obtén la parte de la fecha seleccionada
    const fechaSeleccionada = this.fechaSeleccionada ? this.fechaSeleccionada.substring(0, 10) : '';

    // Busca la fecha destacada correspondiente a la fecha seleccionada
    this.fechaDestacadaSeleccionada = this.highlightedDates.find(fechaDestacada => fechaDestacada.date === fechaSeleccionada);
  }

}

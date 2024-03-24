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

  eventos = [
    { fecha: '2024-03-21', titulo: 'Evento 1', descripcion: 'Descripción del evento 1' },
    { fecha: '2024-03-22', titulo: 'Evento 2', descripcion: 'Descripción del evento 2' },
    { fecha: '2024-03-23', titulo: 'Evento 3', descripcion: 'Descripción del evento 3' }
  ];

  mostrarInformacion() {
    const fechaSeleccionada = this.fechaSeleccionada!.substring(0, 10); // Obtener solo la parte de la fecha

    // Buscar el evento correspondiente a la fecha seleccionada
    const evento = this.eventos.find(evento => evento.fecha === fechaSeleccionada);

    // Mostrar la información del evento seleccionado
    if (evento) {
      this.eventoSeleccionado = { fecha: fechaSeleccionada, titulo: evento.titulo, descripcion: evento.descripcion };
    } else {
      this.eventoSeleccionado = {}; // Limpiar el evento seleccionado si no hay evento para la fecha seleccionada
    }
  }

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}

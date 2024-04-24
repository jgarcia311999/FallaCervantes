import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.page.html',
  styleUrls: ['./event-form.page.scss'],
})
export class EventFormPage {

  nombreEvento: string | undefined;
  descripcion: string | undefined;
  fechaEvento: Date | undefined;

  constructor() {}

  guardarEvento() {
    // Aquí puedes guardar los datos del evento, por ejemplo, enviarlos a un servicio
    console.log('Nombre del Evento:', this.nombreEvento);
    console.log('Descripción:', this.descripcion);
    console.log('Fecha del Evento:', this.fechaEvento);
  }

}

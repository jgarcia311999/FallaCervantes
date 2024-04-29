import { Component } from '@angular/core';
import { EventosService } from '../servicios/eventos.service';
import NuevoEvento from '../interfaces/eventos.interface'; // Asumiendo que NuevoEvento es la interfaz correcta para importar
import Evento from '../interfaces/eventos.interface'; // Asumiendo que NuevoEvento es la interfaz correcta para importar

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.page.html',
  styleUrls: ['./event-form.page.scss'],
})
export class EventFormPage {

  nombreEvento: string | undefined;
  descripcion: string | undefined;
  fechaEvento: string | undefined;

  constructor(private eventService: EventosService) {}

  async guardarEvento() {
    if (!this.fechaEvento || !this.nombreEvento || !this.descripcion) {
      console.error('Error: Datos del evento incompletos o inválidos');
      return;
    }

    const fecha = new Date(this.fechaEvento);
    if (isNaN(fecha.getTime())) {
      console.error('Error: La fecha no es válida');
      return;
    }
    

    const fechaFormateada = fecha.toISOString().slice(0, 10);
    const nuevoEvento: NuevoEvento = {
      date: fechaFormateada,
      textColor: 'rgb(251, 165, 35)',
      backgroundColor: 'rgba(0, 0, 102, 0.5)',
      eventos: [{
        titulo: this.nombreEvento,
        descripcion: this.descripcion
      }]
    };

    try {
      const response = await this.eventService.addEvent(nuevoEvento);
      console.log('Evento guardado:', response);
    } catch (error) {
      console.error('Error al guardar el evento:', error);
    }
}

}

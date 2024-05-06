import { Component } from '@angular/core';
import { EventosService } from '../servicios/eventos.service';
import NuevoEvento from '../interfaces/eventos.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.page.html',
  styleUrls: ['./event-form.page.scss'],
})
export class EventFormPage {
  evento: NuevoEvento | undefined;

  nombreEvento: string | undefined;
  descripcion: string | undefined;
  fechaEvento: string | undefined;

  constructor(private eventService: EventosService, private activatedRoute: ActivatedRoute) { }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit() {
    const evento: NuevoEvento = history.state.evento;
    // Asignar los valores del evento a las variables del formulario
    if (evento && evento.eventos && evento.eventos.length > 0) {
      this.nombreEvento = evento.eventos[0].titulo;
      this.descripcion = evento.eventos[0].descripcion;
    } else {
      // Manejar el caso en el que evento o evento.eventos no están definidos o están vacíos
      // Por ejemplo, podrías asignar valores por defecto o mostrar un mensaje de error
    }

    if (evento && evento.date) {
      this.fechaEvento = evento.date;
    } else {
      // Manejar el caso en el que evento o evento.date no están definidos
      // Por ejemplo, podrías asignar una fecha por defecto o mostrar un mensaje de error
    }


  }

  async guardarEvento() {
    if (!this.fechaEvento || !this.nombreEvento || !this.descripcion) {
      console.error('Error: Datos del evento incompletos o inválidos');
      return;
    }

    const fechaFormateada = new Date(this.fechaEvento).toISOString().slice(0, 10);

    // Obtener el evento existente si ya existe uno para la misma fecha
    let eventosExistente: NuevoEvento[] = await this.eventService.getEventsByDate(fechaFormateada);
    let eventoExistente: NuevoEvento | undefined = eventosExistente.length > 0 ? eventosExistente[0] : undefined;

    // Si existe un evento para la fecha seleccionada, actualizarlo, de lo contrario, crear uno nuevo
    if (eventoExistente) {
      eventoExistente.eventos.push({
        titulo: this.nombreEvento,
        descripcion: this.descripcion
      });
      try {
        await this.eventService.updateEvent(eventoExistente);
        console.log('Evento actualizado:', eventoExistente);
      } catch (error) {
        console.error('Error al actualizar el evento:', error);
      }
    } else {
      // Crear un nuevo evento
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
        console.log('Nuevo evento guardado:', response);
      } catch (error) {
        console.error('Error al guardar el nuevo evento:', error);
      }
    }
  }
}

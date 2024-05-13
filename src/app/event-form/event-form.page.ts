import { Component, OnInit } from '@angular/core';
import { EventosService } from '../servicios/eventos.service';
import NuevoEvento from '../interfaces/eventos.interface'; // Asumiendo que NuevoEvento es la interfaz correcta para importar
import Evento from '../interfaces/eventos.interface'; // Asumiendo que NuevoEvento es la interfaz correcta para importar
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.page.html',
  styleUrls: ['./event-form.page.scss'],
})
export class EventFormPage implements OnInit {

  nombreEvento: string | undefined;
  descripcion: string | undefined;
  fechaEvento: string | undefined;
  eventId: any;

  constructor(private eventService: EventosService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Para query params
    this.route.queryParams.subscribe(params => {
      let id = params['id'];
      console.log(id)
      this.cargarEvento(id);
    });
  }

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

    // Si existe un ID de evento, actualizar el evento existente
    if (this.eventId) {
        console.log(this.eventId);
        const eventoActualizado: NuevoEvento = {
            id: this.eventId, // Asegúrate de incluir el id al objeto si vas a actualizar
            date: fechaFormateada,
            textColor: 'rgb(251, 165, 35)',
            backgroundColor: 'rgba(0, 0, 102, 0.5)',
            eventos: [{
                titulo: this.nombreEvento,
                descripcion: this.descripcion
            }]
        };
        try {
            await this.eventService.updateEvent(this.eventId, eventoActualizado);
            console.log('Evento actualizado');
        } catch (error) {
            console.error('Error al actualizar el evento:', error);
        }
    } else {
        // Si no hay ID, buscar eventos por la fecha
        let eventosExistente = await this.eventService.getEventsByDate(fechaFormateada);
        let eventoExistente = eventosExistente.length > 0 ? eventosExistente[0] : undefined;

        if (eventoExistente) {
            // Si existe un evento en esa fecha, agregar el nuevo detalle del evento
            eventoExistente.eventos.push({
                titulo: this.nombreEvento,
                descripcion: this.descripcion
            });
            try {
              if (eventoExistente.id) {
                await this.eventService.updateEvent(eventoExistente.id, eventoExistente);
                console.log('Evento actualizado:', eventoExistente);
            } else {
                console.error('Error: Intento de actualizar un evento sin ID válido.');
            }
            
            } catch (error) {
                console.error('Error al actualizar el evento con nuevo detalle:', error);
            }
        } else {
            // Crear un nuevo evento si no existe uno en esa fecha
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
                const newId = await this.eventService.addEvent(nuevoEvento);
                this.eventId = newId; // Guardar el ID del nuevo evento
                console.log('Nuevo evento creado:', newId);
            } catch (error) {
                console.error('Error al crear un nuevo evento:', error);
            }
        }
    }
}


async cargarEvento(eventId: string) {
  try {
      const evento = await this.eventService.getEventById(eventId);
      if (!evento) {
          throw new Error('No se encontró el evento');
      }
      this.nombreEvento = evento.eventos[0].titulo;
      this.descripcion = evento.eventos[0].descripcion;
      this.fechaEvento = evento.date;
  } catch (error) {
      console.error('Error al cargar el evento:',  (error as Error).message);
      // Implementa acciones adicionales como volver a una lista de eventos o mostrar un mensaje en la UI
  }
}


}
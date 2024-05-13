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
    eventName: any;

    constructor(private eventService: EventosService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        // Para query params
        this.route.queryParams.subscribe(params => {
            let id = params['id'];
            this.eventName = params['name'];

            console.log(id)
            this.cargarEvento(id, this.eventName);
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
        let eventosExistente = await this.eventService.getEventsByDate(fechaFormateada);
        let eventoExistente = eventosExistente.length > 0 ? eventosExistente[0] : undefined;

        if (eventoExistente && eventoExistente.id) {
            // Identificar el índice del evento a actualizar o eliminar
            const index = eventoExistente.eventos.findIndex(e => e.titulo === this.nombreEvento);

            if (index !== -1) {
                // Elimina el evento existente si se encuentra
                eventoExistente.eventos.splice(index, 1);
            }

            // Añadir el nuevo evento actualizado al array
            eventoExistente.eventos.push({
                titulo: this.nombreEvento,
                descripcion: this.descripcion
            });

            try {
                await this.eventService.updateEvent(eventoExistente.id, eventoExistente);
                console.log('Evento actualizado correctamente.');
            } catch (error) {
                console.error('Error al actualizar el evento:', error);
            }
        } else {
            // Crear un nuevo evento si no existe uno en esa fecha
            const nuevoEvento = {
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
                console.log('Nuevo evento creado con éxito:', newId);
            } catch (error) {
                console.error('Error al crear un nuevo evento:', error);
            }
        }
    }



    async cargarEvento(eventId: string, eventName: string) {
        try {
            const evento = await this.eventService.getEventById(eventId);
            if (!evento) {
                throw new Error('No se encontró el evento');
            }
            // Busca el evento específico por nombre dentro del array de eventos
            const eventoEspecifico = evento.eventos.find(e => e.titulo === eventName);
            if (eventoEspecifico) {
                this.nombreEvento = eventoEspecifico.titulo;
                this.descripcion = eventoEspecifico.descripcion;
                this.fechaEvento = evento.date;  // Asumiendo que la fecha es la misma para todos los eventos en el documento
            } else {
                throw new Error('No se encontró el evento con el nombre especificado');
            }
        } catch (error) {
            console.error('Error al cargar el evento:', (error as Error).message);
            // Implementa acciones adicionales como volver a una lista de eventos o mostrar un mensaje en la UI
        }
    }


}
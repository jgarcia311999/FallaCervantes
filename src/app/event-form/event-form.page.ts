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

  /**
   * Guarda el evento en la lista de eventos.
   * Comprueba si la fecha está definida y es válida. Si no es así, lanza un error y termina la función.
   * Convierte la fecha a un objeto Date y verifica si la conversión fue exitosa. Si no, lanza un error y termina la función.
   * Obtiene la fecha en formato YYYY-MM-DD y la guarda en un objeto con los datos del evento.
   * Agrega el evento a la lista de eventos existente o crea una nueva lista si aún no existe.
   * Muestra los datos guardados en la consola.
   */
  guardarEvento() {
    // Verificar si this.fechaEvento está definido y no es null
    if (!this.fechaEvento) {
      console.error('Error: La fecha no está definida');
      return;
    }

    // Convertir this.fechaEvento a un objeto Date
    const fecha = new Date(this.fechaEvento);

    // Verificar si la conversión fue exitosa
    if (isNaN(fecha.getTime())) {
      console.error('Error: La fecha no es válida');
      return;
    }

    // Obtener la fecha en formato YYYY-MM-DD
    const fechaFormateada = fecha.toISOString().slice(0, 10);

    // Crear un objeto con los datos del evento
    const nuevoEvento = {
      date: fechaFormateada,
      textColor: 'rgb(251, 165, 35)',
      backgroundColor: 'rgb(251, 165, 35)',
      eventos: [
        {
          titulo: this.nombreEvento,
          descripcion: this.descripcion
        }
      ]
    };

    // Agregar el nuevo evento a la lista de eventos existente o crear una nueva lista si aún no existe
    /* if (!this.listaEventos) {
      this.listaEventos = [nuevoEvento];
    } else {
      this.listaEventos.push(nuevoEvento);
    } */

    // Mostrar los datos guardados
    console.log('Evento guardado:', nuevoEvento);
  }
  
  

}

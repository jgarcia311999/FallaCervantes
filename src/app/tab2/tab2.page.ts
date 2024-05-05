import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { EventosService } from '../servicios/eventos.service';
import NuevoEvento, { Evento } from '../interfaces/eventos.interface';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  segmentValue: string = 'calendario';
  tarjetaSeleccionada: number | null | undefined;
  fechaSeleccionada: string | undefined;
  fechaDestacadaSeleccionada: NuevoEvento | undefined;
  highlightedDates: NuevoEvento[] = [];

  constructor(
    private eventService: EventosService,
    public actionSheetController: ActionSheetController,
    private modalController: ModalController,
  ) { }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(events => {
      // Ordenar los eventos por fecha antes de asignarlos a highlightedDates
      this.highlightedDates = events.sort((a, b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      });
      console.log(this.highlightedDates);
    });
  }

  esFechaIgualOPosterior(fechaEvento: string): boolean {
    const hoy: Date = new Date();
    const fecha: Date = new Date(fechaEvento);

    // Establecemos la hora de hoy a las 00:00:00 para considerar solo la fecha.
    hoy.setHours(0, 0, 0, 0);

    // Establecemos la hora de la fecha proporcionada a las 00:00:00 para considerar solo la fecha.
    fecha.setHours(0, 0, 0, 0);

    return fecha.getTime() >= hoy.getTime();
  }




  mostrarInformacionMejorada() {
    const fechaSeleccionada = this.fechaSeleccionada ? this.fechaSeleccionada.substring(0, 10) : '';
    this.fechaDestacadaSeleccionada = this.highlightedDates.find(fechaDestacada => fechaDestacada.date === fechaSeleccionada);
    console.log('Función mostrarInformacionMejorada() llamada');
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const monthNames = [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    const monthIndex = date.getMonth();
    const day = date.getDate();
    const formattedDay = day.toString().padStart(2, '0');
    const formattedMonth = monthNames[monthIndex];
    return `${formattedDay} de ${formattedMonth}`;
  }

  agregarEvento() {
    // Implementa la lógica para agregar un nuevo evento aquí
  }

  seleccionarTarjeta(index: number) {
    this.tarjetaSeleccionada = this.tarjetaSeleccionada === index ? null : index;
  }

  closeModal() {
    this.modalController.dismiss();
  }

  async presentActionSheet(nuevoEvento: NuevoEvento) {
    if (typeof nuevoEvento.id !== 'string') {
      console.error('El evento no tiene un ID válido.');
      return;
    }

    const eventId = nuevoEvento.id; // Aseguramos que el id es un string

    const actionSheet = await this.actionSheetController.create({
      header: nuevoEvento.eventos[0].titulo,
      buttons: [
        {
          text: 'Editar',
          icon: 'pencil',
          handler: () => {
            // Suponiendo que queremos actualizar la descripción del primer evento en el array
            if (nuevoEvento.eventos.length > 0) {
              this.eventService.updateEvent(eventId, {
                "eventos": [
                  { ...nuevoEvento.eventos[0], descripcion: 'Nueva Descripción' }  // Actualizar la descripción del primer evento
                ]
              }).then(() => {
                console.log('Evento actualizado');
              }).catch(error => {
                console.error('Error actualizando evento:', error);
              });
            }
          }
        },
        {
          text: 'Eliminar',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            this.eventService.deleteEvent(eventId).then(() => {
              console.log('Evento eliminado');
            }).catch(error => {
              console.error('Error eliminando evento:', error);
            });
          }
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar clicked');
          }
        }
      ]
    });

    await actionSheet.present();
  }









}
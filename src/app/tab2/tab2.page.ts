import { Component, OnInit, ViewChild } from '@angular/core';
import { ActionSheetController, IonModal, ModalController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { EventosService } from '../servicios/eventos.service';
import NuevoEvento from '../interfaces/eventos.interface';

// Interfaz para definir la estructura de un evento
interface Evento {
  titulo: string;
  descripcion: string;
  photo?: string; // Campo opcional para almacenar la URL de la foto
}

// Interfaz para definir la estructura de una fecha destacada con eventos asociados
interface FechaDestacada {
  date: string;
  textColor: string;
  backgroundColor: string;
  eventos: Evento[];
}

@Component({
  selector: 'app-tab6',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit{
  segmentValue: string = 'eventos'; // Valor inicial del segmento

  tarjetaSeleccionada: number | null | undefined;
  fechaSeleccionada: string | undefined;
  fechaDestacadaSeleccionada: FechaDestacada | undefined;
  bgColorCalendar = "#00006680";
  

  highlightedDates: NuevoEvento[] = [];
  constructor(
    private eventService: EventosService,
    public actionSheetController: ActionSheetController
  ) { }
  ngOnInit(): void {
    this.eventService.getEvents().subscribe(events =>{
      this.highlightedDates = events;
      console.log(events);
    })
  }

  esFechaIgualOPosterior(fechaEvento: string): boolean {
    const hoy = new Date();
    const fecha = new Date(fechaEvento);
    return fecha >= hoy;
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

  async presentActionSheet(evento: any) {
    const actionSheet = await this.actionSheetController.create({
      header: evento.titulo,
      buttons: [
        {
          text: 'Editar',
          icon: 'pencil',
          handler: () => {
            console.log('Editar clicked for:', evento.titulo);
            // Agrega aquí la lógica para editar el evento
          }
        },
        {
          text: 'Eliminar',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Eliminar clicked for:', evento.titulo);
            // Agrega aquí la lógica para eliminar el evento
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
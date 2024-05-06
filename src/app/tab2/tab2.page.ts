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
  segmentValue: string = 'eventos';
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
      console.log('Eventos recuperados:', events); // Agregar esta línea para depurar
      // Ordenar los eventos por fecha antes de asignarlos a highlightedDates
      this.highlightedDates = events.sort((a, b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      });
      console.log('Eventos destacados:', this.highlightedDates); // Agregar esta línea para depurar
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
    const fechaSeleccionada = this.fechaSeleccionada ? new Date(this.fechaSeleccionada).toISOString().substring(0, 10) : '';
    console.log('Tipo de datos de la fecha seleccionada:', typeof fechaSeleccionada);
    console.log('Fecha seleccionada:', fechaSeleccionada);
  
    console.log('Fechas en highlightedDates:');
    this.highlightedDates.forEach(fechaDestacada => {
      console.log('Tipo de datos de la fecha resaltada:', typeof fechaDestacada.date);
      console.log('Fecha resaltada:', fechaDestacada.date);
    });
  
    this.fechaDestacadaSeleccionada = this.highlightedDates.find(fechaDestacada => fechaDestacada.date === fechaSeleccionada);
    console.log('Fecha destacada seleccionada:', this.fechaDestacadaSeleccionada);
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

  seleccionarTarjeta(index: number) {
    this.tarjetaSeleccionada = this.tarjetaSeleccionada === index ? null : index;
  }




}
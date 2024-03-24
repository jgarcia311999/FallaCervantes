import { Component } from '@angular/core';

interface Evento {
  titulo: string;
  descripcion: string;
}

interface FechaDestacada {
  date: string;
  textColor: string;
  backgroundColor: string;
  eventos: Evento[];
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  nuevoEvento: any = {}; // Objeto para almacenar los datos del nuevo evento
  eventos: Evento[] = []; // Arreglo para almacenar los eventos
  fechaSeleccionada: string | undefined;
  fechaDestacadaSeleccionada: FechaDestacada | undefined;
  highlightedDates: FechaDestacada[] = [
    {
      date: '2024-03-31',
      textColor: 'rgb(251, 165, 35)',
      backgroundColor: '#000066',
      eventos: [
        { titulo: "Evento mejorado 1", descripcion: "Decripcion mejorado 1" },
        { titulo: "Evento mejorado 1.2", descripcion: "Decripcion mejorado 1.2" }
      ]
    },
    {
      date: '2024-03-24',
      textColor: 'rgb(251, 165, 35)',
      backgroundColor: '#000066',
      eventos: [
        { titulo: "Evento mejorado 2", descripcion: "Decripcion mejorado 2" },
        { titulo: "Evento mejorado 2.2", descripcion: "Decripcion mejorado 2.2" }
      ]
    },
    {
      date: '2024-03-16',
      textColor: 'rgb(251, 165, 35)',
      backgroundColor: '#000066',
      eventos: [
        { titulo: "Evento mejorado 3", descripcion: "Decripcion mejorado 3" },
        { titulo: "Evento mejorado 3.2", descripcion: "Decripcion mejorado 3.2" }
      ]
    },
    {
      date: '2024-03-10',
      textColor: 'rgb(251, 165, 35)',
      backgroundColor: '#000066',
      eventos: [
        { titulo: "Evento mejorado 4", descripcion: "Decripcion mejorado 4" },
        { titulo: "Evento mejorado 4.2", descripcion: "Decripcion mejorado 4.2" }
      ]
    }
  ];

  mostrarInformacionMejorada() {
    const fechaSeleccionada = this.fechaSeleccionada ? this.fechaSeleccionada.substring(0, 10) : '';
    this.fechaDestacadaSeleccionada = this.highlightedDates.find(fechaDestacada => fechaDestacada.date === fechaSeleccionada);
  }

  mostrarForm: boolean = false;

  mostrarFormulario() {
    this.mostrarForm = true;
  }

  agregarEvento() {
    if (this.nuevoEvento.titulo && this.nuevoEvento.descripcion) {
      this.fechaDestacadaSeleccionada?.eventos.push({ titulo: this.nuevoEvento.titulo, descripcion: this.nuevoEvento.descripcion });
      console.log('Evento agregado:', this.nuevoEvento);
      this.nuevoEvento = {};
      this.mostrarForm = false;
    } else {
      console.log("Por favor, complete todos los campos del formulario.");
    }
  }

  fechaHoraSeleccionada: string | undefined;

  handleFileInput(event: any) {
    const file = event.target.files[0]; // Obtener el archivo seleccionado
    // Aquí puedes agregar la lógica para manejar el archivo, por ejemplo, cargarlo a un servidor
  }



}

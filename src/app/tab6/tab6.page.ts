import { Component, ViewChild } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';
import { formatDate } from '@angular/common';

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
  templateUrl: './tab6.page.html',
  styleUrls: ['./tab6.page.scss'],
})
export class Tab6Page{
  @ViewChild(IonModal)
  modal!: IonModal;

  tarjetaSeleccionada: number | null | undefined;
  nuevoEvento: Evento = { titulo: '', descripcion: '' };
  fechaSeleccionada: string | undefined;
  fechaDestacadaSeleccionada: FechaDestacada | undefined;
  bgColorCalendar = "#00006680";

  highlightedDates: FechaDestacada[] = [
    {
      date: '2024-03-31',
      textColor: 'rgb(251, 165, 35)',
      backgroundColor: this.bgColorCalendar,
      eventos: [
        {titulo: "Evento mejorado 1", descripcion: "Decripcion mejorado 1"},
        { titulo: "Evento mejorado 1.2", descripcion: "Decripcion mejorado 1.2"}
      ]
    },
    {
      date: '2024-04-24',
      textColor: 'rgb(251, 165, 35)',
      backgroundColor: this.bgColorCalendar,
      eventos: [
        { titulo: "Evento mejorado 2", descripcion: "Decripcion mejorado 2" },
        { titulo: "Evento mejorado 2.2", descripcion: "Decripcion mejorado 2.2" }
      ]
    },
    {
      date: '2024-04-16',
      textColor: 'rgb(251, 165, 35)',
      backgroundColor: this.bgColorCalendar,
      eventos: [
        { titulo: "Evento mejorado 3", descripcion: "Decripcion mejorado 3" },
      ]
    },
    {
      date: '2024-04-10',
      textColor: 'rgb(251, 165, 35)',
      backgroundColor: this.bgColorCalendar,
      eventos: [
        { titulo: "Evento mejorado 4", descripcion: "Decripcion mejorado 4" },
        { titulo: "Evento mejorado 4.2", descripcion: "Decripcion mejorado 4.2" }
      ]
    },
    {
      date: '2024-04-25',
      textColor: 'rgb(251, 165, 35)',
      backgroundColor: this.bgColorCalendar,
      eventos: [
        { titulo: "Evento 5", descripcion: "Descripción del evento 5" },
        { titulo: "Evento 5.2", descripcion: "Descripción del evento 5.2" }
      ]
    },
    {
      date: '2024-05-01',
      textColor: 'rgb(251, 165, 35)',
      backgroundColor: this.bgColorCalendar,
      eventos: [
        { titulo: "Evento 6", descripcion: "Descripción del evento 6" },
        { titulo: "Evento 6.2", descripcion: "Descripción del evento 6.2" }
      ]
    },
    {
      date: '2024-05-10',
      textColor: 'rgb(251, 165, 35)',
      backgroundColor: this.bgColorCalendar,
      eventos: [
        { titulo: "Evento 7", descripcion: "Descripción del evento 7" },
      ]
    },
    {
      date: '2024-05-15',
      textColor: 'rgb(251, 165, 35)',
      backgroundColor: this.bgColorCalendar,
      eventos: [
        { titulo: "Evento 8", descripcion: "Descripción del evento 8" },
        { titulo: "Evento 8.2", descripcion: "Descripción del evento 8.2" }
      ]
    },
    {
      date: '2024-05-20',
      textColor: 'rgb(251, 165, 35)',
      backgroundColor: this.bgColorCalendar,
      eventos: [
        { titulo: "Evento 9", descripcion: "Descripción del evento 9" },
        { titulo: "Evento 9.2", descripcion: "Descripción del evento 9.2" }
      ]
    }
  ];

  constructor(private modalController: ModalController) { }

  async openModal() {
    const modal = await this.modalController.create({
      component: Tab6Page, // O el componente de contenido del modal
      cssClass: 'custom-modal-css',
      mode: 'ios',
      presentingElement: await this.modalController.getTop() // Esto se necesita para iOS 15+
    });
  
    return await modal.present();
  }
  

  closeModal() {
    this.modalController.dismiss();
  }
  /**
   * Agrega un nuevo evento al calendario.
   */
  /* agregarEvento() {
    const fechaFormateada = formatDate(this.nuevoEvento.fechaHora, 'yyyy-MM-dd', 'en');
    this.highlightedDates.push({
      date: fechaFormateada,
      textColor: 'rgb(251, 165, 35)',
      backgroundColor: this.bgColorCalendar,
      eventos: [this.nuevoEvento]
    });

    this.nuevoEvento = { titulo: '', descripcion: '' }; // Resetear el objeto nuevoEvento
    this.closeModal(); // Cerrar el modal después de agregar el evento
  } */

  /**
   * Comprueba si la fecha del evento es igual o posterior a la fecha actual.
   */
  esFechaIgualOPosterior(fechaEvento: string): boolean {
    const hoy = new Date();
    const fecha = new Date(fechaEvento);
    return fecha >= hoy;
  }

  /**
   * Muestra información mejorada de un evento al seleccionar una fecha.
   */
  mostrarInformacionMejorada() {
    const fechaSeleccionada = this.fechaSeleccionada ? this.fechaSeleccionada.substring(0, 10) : '';
    this.fechaDestacadaSeleccionada = this.highlightedDates.find(fechaDestacada => fechaDestacada.date === fechaSeleccionada);
    console.log('Función mostrarInformacionMejorada() llamada');
  }

  /**
   * Da formato a una fecha.
   */
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



  /**
   * Método para detener la propagación del evento de clic dentro del modal.
   */
  onModalContentClick(event: MouseEvent) {
    event.stopPropagation(); // Previene que el clic cierre el modal si se hace clic en su contenido
  }

  /**
   * Alternar la selección de tarjeta en la vista.
   */
  seleccionarTarjeta(index: number) {
    this.tarjetaSeleccionada = this.tarjetaSeleccionada === index ? null : index;
  }
}

import { formatDate } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';


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

interface nuevoEvento {
  titulo: '',
  descripcion: '',
  fechaHora: ''
};


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  tarjetaSeleccionada: number | null | undefined;
  constructor() { }


  @ViewChild('calendario') calendario: any;
  // Variables
  nuevoEvento: any = {};
  eventos: Evento[] = [];
  fechaSeleccionada: string | undefined;
  fechaDestacadaSeleccionada: FechaDestacada | undefined;
  bgColorCalendar = "#00006680";

  mostrarModal: boolean = false;



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

  modal: any;
  mostrarForm: boolean = false;
  fechaHoraSeleccionada: string | undefined;
  isModalOpen = false;

  agregarEvento() {
    // Formatear la fecha a 'YYYY-MM-DD' antes de agregarla al objeto nuevo evento
    const fechaFormateada = formatDate(this.nuevoEvento.fechaHora, 'yyyy-MM-dd', 'en');

    // Agregar el nuevo evento a la última posición de highlightedDates
    this.highlightedDates.push({
      date: fechaFormateada,
      textColor: 'rgb(251, 165, 35)',
      backgroundColor: this.bgColorCalendar,
      eventos: [{
        titulo: this.nuevoEvento.titulo,
        descripcion: this.nuevoEvento.descripcion
      }]
    });

    // Reiniciar el objeto nuevoEvento para futuros usos
    this.nuevoEvento = {
      titulo: '',
      descripcion: '',
      fechaHora: ''
    };

    // Cerrar el modal después de agregar el evento
    this.isModalOpen = false;

    // Actualizar el calendario después de agregar el evento
    this.mostrarInformacionMejorada();

    // Forzar la actualización del calendario llamando al método refresh()
    this.calendario.refresh();
  }


  esFechaIgualOPosterior(fechaEvento: string): boolean {
    const hoy = new Date();
    const fecha = new Date(fechaEvento);
    return fecha >= hoy;
  }


  /** 
   * Método para mostrar la información mejorada cuando se selecciona una fecha.
   * Busca la fecha seleccionada en el arreglo de fechas destacadas y actualiza la variable fechaDestacadaSeleccionada.
   */
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

  /** 
   * Método para mostrar el formulario de creación de eventos.
   */
  mostrarFormulario() {
    this.mostrarForm = true;
  }

  /** 
   * Método para manejar la carga de archivos.
   * Se ejecuta cuando se selecciona un archivo en el input de tipo file.
   */
  handleFileInput(event: any) {
    const file = event.target.files[0]; // Obtener el archivo seleccionado
    // Aquí puedes agregar la lógica para manejar el archivo, por ejemplo, cargarlo a un servidor
  }

  /** 
   * Método para manejar el evento de cancelación del modal.
   * @param isOpen Indica si el modal está abierto o cerrado
   */
  cancel(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  toggleModal() {
    this.mostrarModal = !this.mostrarModal; // Alternar el estado del modal
  }

  cerrarModal() {
    this.mostrarModal = false; // Cerrar el modal si se hace clic fuera del contenido
  }

  onModalContentClick(event: MouseEvent) {
    event.stopPropagation(); // Detener la propagación del evento de clic dentro del contenido del modal
  }

  seleccionarTarjeta(index: number) {
    this.tarjetaSeleccionada = this.tarjetaSeleccionada === index ? null : index; // Alternar la selección de la tarjeta
  }
}

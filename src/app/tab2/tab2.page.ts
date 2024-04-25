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

  /**
   * Agrega un nuevo evento al calendario
   */
  agregarEvento() {
    // Formatear la fecha a 'YYYY-MM-DD' antes de agregarla al objeto nuevo evento
    const fechaFormateada = formatDate(this.nuevoEvento.fechaHora, 'yyyy-MM-dd', 'en');

    // Agregar el nuevo evento a la última posición de highlightedDates
    this.highlightedDates.push({
      date: fechaFormateada, // La fecha en formato YYYY-MM-DD
      textColor: 'rgb(251, 165, 35)',
      backgroundColor: this.bgColorCalendar, // Color del fondo del evento
      eventos: [{
        titulo: this.nuevoEvento.titulo, // El título del evento
        descripcion: this.nuevoEvento.descripcion // La descripción del evento
      }]
    });

    // Reiniciar el objeto nuevoEvento para futuros usos
    this.nuevoEvento = {
      titulo: '', // El titulo del nuevo evento
      descripcion: '', // La descripción del nuevo evento
      fechaHora: '' // La fecha y hora del nuevo evento
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
   * Método para mostrar la información mejorada de un evento en particular
   * al seleccionar una fecha en el calendario.
   * Busca la fecha seleccionada en el arreglo de fechas destacadas y
   * actualiza la variable fechaDestacadaSeleccionada con los detalles
   * del evento correspondiente.
   */
  mostrarInformacionMejorada() {
    // Buscar la fecha seleccionada en el arreglo de fechas destacadas
    const fechaSeleccionada = this.fechaSeleccionada ? this.fechaSeleccionada.substring(0, 10) : '';
    this.fechaDestacadaSeleccionada = this.highlightedDates.find(fechaDestacada => fechaDestacada.date === fechaSeleccionada);

    // Mostrar en la consola que el método ha sido llamado
    console.log('Función mostrarInformacionMejorada() llamada');
  }

  /**
   * Método para dar formato a una fecha de tipo string en formato
   * 'DD/MM/YYYY' y devuelve la fecha con el formato 'D de M'.
   * @param dateString Fecha en formato 'DD/MM/YYYY'
   * @returns Fecha con formato 'D de M'
   */
  formatDate(dateString: string): string {
    // Convertir la fecha de tipo string a un objeto Date
    const date = new Date(dateString);

    // Obtener los nombres de los meses en español
    const monthNames = [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    // Obtener el índice del mes (0 - 11)
    const monthIndex = date.getMonth();

    // Obtener el día del mes (1 - 31)
    const day = date.getDate();

    // Añadir ceros a la izquierda al día si es necesario
    const formattedDay = day.toString().padStart(2, '0');

    // Obtener el nombre del mes correspondiente al índice
    const formattedMonth = monthNames[monthIndex];

    // Devolver la fecha con formato 'D de M'
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

  /**
   * Método para alternar el estado del modal de selección de fechas.
   * Cuando se llama a este método, alterna el estado de mostrar o no mostrar
   * el modal de selección de fechas.
   */
  toggleModal() {
    this.mostrarModal = !this.mostrarModal; // Alternar el estado del modal
  }
  

  /**
   * Método para cerrar el modal de selección de fechas.
   * Cuando se llama a este método, se cierra el modal de selección de fechas
   * si se hace clic fuera del contenido del modal.
   */
  cerrarModal() {
    this.mostrarModal = false; // Cerrar el modal si se hace clic fuera del contenido
  }

  /**
   * Método para detener la propagación del evento de clic dentro del contenido del modal.
   * @param event Evento de clic generado al hacer clic dentro del contenido del modal
   */
  onModalContentClick(event: MouseEvent) {
    event.stopPropagation(); // Detener la propagación del evento de clic dentro del contenido del modal
    // Evita que se cierre el modal cuando se hace clic dentro del contenido del mismo
  }

  /**
   * Método para seleccionar una tarjeta en el modal de selección de fechas.
   * @param index Índice de la tarjeta en el arreglo de tarjetas
   */
  seleccionarTarjeta(index: number) {
    this.tarjetaSeleccionada = this.tarjetaSeleccionada === index ? null : index; // Alternar la selección de la tarjeta
  }
}

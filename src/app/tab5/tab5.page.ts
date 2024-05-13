import { Component, OnInit } from '@angular/core';
import { UserService } from '../servicios/user.service';
import { Router } from '@angular/router';
import { ActionSheetController, ModalController, AlertController } from '@ionic/angular';
import { EventosService } from '../servicios/eventos.service';
import  NuevoEvento  from '../interfaces/eventos.interface';
import { Evento } from '../interfaces/eventos.interface';
import Aviso from '../interfaces/avisos.interface';
import { AvisosService } from '../servicios/avisos.service';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  selectedImage: string = '../../assets/images/placeholder.PNG';
  correoUsuario: string | null = null; // Variable para almacenar el correo del usuario
  highlightedDates: NuevoEvento[] = [];
  avisosFalla: Aviso[] = [];
  avisos: string[] = [];

  constructor(
    private userService: UserService,
    private router: Router,
    private modalController: ModalController,
    private eventService: EventosService,
    private avisoService: AvisosService,
    public actionSheetController: ActionSheetController,
    public alertController: AlertController
  ) { }

  ngOnInit(): void {
    // Al iniciar la página, obtener el usuario actual y su correo electrónico
    const usuarioActual = this.userService.getCurrentUser();
    if (usuarioActual) {
      this.correoUsuario = usuarioActual.email;
      console.log('El correo del usuario actual es:', this.correoUsuario);
    }

    const selectedImage = localStorage.getItem('selectedImage');
    console.log('Valor de selectedImage antes de establecer en localStorage:', selectedImage);
    if (selectedImage) {
      this.selectedImage = selectedImage;
    } else {
      this.selectedImage = '../../assets/images/placeholder.PNG'; // Si no hay valor en localStorage, usa un valor predeterminado
    }

    console.log('Valor de selectedImage después de establecer en localStorage:', this.selectedImage);

    this.eventService.getEvents().subscribe(events => {
      // Ordenar los eventos por fecha antes de asignarlos a highlightedDates
      this.highlightedDates = events.sort((a, b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      });
      console.log(this.highlightedDates);
    });

    this.avisoService.getNotifications().subscribe(avisos => {
      this.avisosFalla = avisos;
    });
  }

  onClick() {
    this.userService.logout()
      .then(response => {
        this.router.navigate(['/login']);
      })
      .catch(error => {
        console.log(error);
      });
  }

  selectImage(image: string) {
    this.selectedImage = image;

    // Guardar la imagen seleccionada en el localStorage
    localStorage.setItem('selectedImage', image);
  }

  closeModal() {
    this.modalController.dismiss();
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

  async presentActionSheetEventos(nuevoEvento: NuevoEvento, eventoSeleccionado: Evento) {
    if (typeof nuevoEvento.id !== 'string') {
      console.error('El evento no tiene un ID válido.');
      return;
    }

    let eventId: string = nuevoEvento.id;
    let eventName: string = eventoSeleccionado.titulo;
    console.log("EventId", eventId)
    const actionSheet = await this.actionSheetController.create({
      header: eventName,  // Usar el título del evento seleccionado
      buttons: [
        {
          text: 'Editar',
          icon: 'pencil',
          handler: () => {
            this.router.navigate(['/event-form'], { queryParams: { id: eventId, name: eventName } });
            this.closeModal();
          }
        },
        {
          text: 'Eliminar',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            this.presentDeleteEventAlert(eventId, eventName);
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


  async presentActionSheetAvisos(aviso: Aviso) {
    const actionSheet = await this.actionSheetController.create({
      header: aviso.titulo,
      buttons: [
        {
          text: 'Editar',
          icon: 'pencil',
          handler: () => {
            // Aquí debes pasar aviso en lugar de event
            this.router.navigate(['/event-form']);
            this.closeModal();
          }
        },
        {
          text: 'Eliminar',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            const avisoId = aviso.id;
            if (avisoId) { // Verifica si avisoId no es undefined
              this.presentDeleteAvisoAlert(avisoId); // Llama a la función solo si avisoId es válido
            } else {
              console.error('El ID del aviso es undefined.');
            }
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


  async presentDeleteEventAlert(eventId: string, eventName: string) {
    const alert = await this.alertController.create({
      header: 'Confirmar eliminación',
      message: `¿Estás seguro de que quieres eliminar este evento llamado "${eventName}"?`, // Interpolación para incluir eventName
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Eliminación cancelada');
          }
        },
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: () => {
            this.deleteEvent(eventId, eventName);
          }
        }
      ]
    });

    await alert.present();
  }

  async presentDeleteAvisoAlert(avisoId: string) {
    const alert = await this.alertController.create({
      header: 'Confirmar eliminación',
      message: '¿Estás seguro de que quieres eliminar este aviso?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Eliminación cancelada');
          }
        },
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: () => {
            this.deleteAviso(avisoId);
          }
        }
      ]
    });

    await alert.present();
  }

  deleteEvent(eventId: string, eventName: string) {
    this.eventService.deleteEvent(eventId, eventName)
      .then(() => {
        console.log('Evento eliminado');
      })
      .catch(error => {
        console.error('Error eliminando evento:', error);
      });
  }

  deleteAviso(avisoId: string) {
    this.avisoService.deleteNotification(avisoId)
      .then(() => {
        console.log('Aviso eliminado');
      })
      .catch(error => {
        console.error('Error eliminando aviso:', error);
      });
  }
}

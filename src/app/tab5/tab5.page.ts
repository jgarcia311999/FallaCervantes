import { Component, OnInit } from '@angular/core';
import { UserService } from '../servicios/user.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  selectedImage: string = '../../assets/images/placeholder.PNG'; 
  correoUsuario: string | null = null; // Variable para almacenar el correo del usuario

  constructor(private userService: UserService, private router: Router, private modalController: ModalController) { }
  ngOnInit(): void {
    // Al iniciar la página, obtener el usuario actual y su correo electrónico
    const usuarioActual = this.userService.getCurrentUser();
    if (usuarioActual) {
      this.correoUsuario = usuarioActual.email;
    }
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
  }

  closeModal() {
    this.modalController.dismiss();
  }

}

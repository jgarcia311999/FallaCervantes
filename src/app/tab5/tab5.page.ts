import { Component } from '@angular/core';
import { UserService } from '../servicios/user.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page {

  selectedImage: string = '../../assets/images/userIconB.webp'; 

  constructor(private userService: UserService, private router: Router, private modalController: ModalController) { }

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

import { Component } from '@angular/core';
import { UserService } from '../servicios/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  constructor(private userService: UserService, private router: Router) { }
  email: string = '';
  password: string = '';
  onSubmit() {
    this.userService.register(this.email, this.password)
    .then(response => {
      console.log(response);
      this.router.navigate(['']);
    })
    .catch(error => console.log(error));
    //mostrar toast
  }

}

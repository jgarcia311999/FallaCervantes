import { Component } from '@angular/core';
import { UserService } from '../servicios/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

  constructor(private userService: UserService, private router: Router) { }

  email: string = '';
  password: string = '';

  onSubmit() {
    this.userService.login(this.email, this.password)
   .then(response => {
    console.log(response);
     this.router.navigate(['']);
   })
    .catch(error => console.log(error));
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  nome: string = '';
  password: string = '';

  user: { name: string; password: string } = {
    name: '',
    password: '',
  };

  login() {
    console.log(this.user);
  }
}

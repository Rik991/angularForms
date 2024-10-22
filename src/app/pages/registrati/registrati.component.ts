import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-registrati',
  templateUrl: './registrati.component.html',
  styleUrl: './registrati.component.scss',
})
export class RegistratiComponent {
  form!: FormGroup;
  usersArr!: [{}];

  constructor(private fb: FormBuilder, private userSvc: UsersService) {}

  ngOnInit() {
    this.form = this.fb.group({
      nome: this.fb.control(''),
      cognome: this.fb.control(''),
      password: this.fb.control(''),
      confermaPassword: this.fb.control(''),
      genere: this.fb.control(''),
      image: this.fb.control(''),
      bio: this.fb.control(''),
      username: this.fb.control(''),
    });
  }

  send() {
    this.usersArr.push(this.form.value);
    console.log(this.usersArr);
  }
}

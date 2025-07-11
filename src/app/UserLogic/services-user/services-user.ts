import { Component, inject, OnInit } from '@angular/core';
import { ServicesUser } from '../services-user';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserData } from '../../Interfaces/interfaces';
import { CommonModule } from '@angular/common';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-services-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './services-user.html',
  styleUrl: './services-user.css'
})
export class User implements OnInit {
    router = inject(Router)
  private servicesUser = inject(ServicesUser);


  readonly loginForm = new FormGroup({
  email: new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('', [Validators.required, Validators.minLength(1)])
});

  ngOnInit(): void {

  }

  async onSubmit() {
  if (this.loginForm.valid) {
    try {

      const email = this.loginForm.value.email ?? '';
      const password = this.loginForm.value.password ?? '';

      await this.servicesUser.login(email, password);
      await this.router.navigate(['/companies']);

    } catch (err) {
      console.error('Error during login:', err);
      console.log(err);
    }
  }
}
}

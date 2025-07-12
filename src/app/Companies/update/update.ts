import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServicesUser } from '../../UserLogic/services-user';

@Component({
  selector: 'app-update',
  imports: [ReactiveFormsModule],
  templateUrl: './update.html',
  styleUrl: './update.css'
})
export class Update {
  fb = inject(FormBuilder);
  UsersServices = inject(ServicesUser)



  form:FormGroup = this.fb.group({
    plan: [0, [Validators.required]],
    tenant_name: ['', [Validators.required]],
    tenant_cedrnc: ['', [Validators.required]],
    tenant_id: [0, [Validators.required]],




  });

onSubmit() {
  if (this.form.valid) {

    this.UsersServices.CreateCompany(this.form.value).subscribe({
      next: (response) => {
        console.log('Company created successfully:', response);
      },
      error: (error) => {
        console.error('Error creating company:', error);
      }
    });
    this.form.reset();
  }
}

}

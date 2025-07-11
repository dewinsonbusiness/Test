import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ServicesUser } from '../../UserLogic/services-user';

@Component({
  selector: 'app-create-comoponent',
  imports: [ReactiveFormsModule],
  templateUrl: './create-comoponent.html',
  styleUrl: './create-comoponent.css'
})
export class CreateComoponent {

  UsersServices = inject(ServicesUser)

  form = new FormGroup({
    plan_id: new FormControl(0, [Validators.required]),
    tenant_name: new FormControl<string>( '', [Validators.required,]),
    tenant_cedrnc: new FormControl('', [Validators.required]),

  });

onSubmit() {
  if (this.form.valid) {
    const formValue = this.form.value;
    const newCompany = {
      plan_id: formValue.plan_id as number,
      tenant_name: formValue.tenant_name as string,
      tenant_cedrnc: formValue.tenant_cedrnc as string
    };
    this.UsersServices.CreateCompany(newCompany)
  }
}

}

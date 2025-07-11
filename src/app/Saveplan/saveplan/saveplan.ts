import { Component, inject } from '@angular/core';
import { plansend } from '../../Interfaces/interfaces';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServicesPlan } from '../../Plan/services-plan';

@Component({
  selector: 'app-saveplan',
  imports: [ReactiveFormsModule],
  templateUrl: './saveplan.html',
  styleUrl: './saveplan.css'
})
export class Saveplan {
  planServices = inject(ServicesPlan)

  plansed:plansend[]= []

  form = new FormGroup({
    plan_name: new FormControl('', [Validators.required]),
    planDetail_to: new FormControl( 0, [Validators.required,]),
    planDetail_from: new FormControl(0, [Validators.required]),
     planDetail_tolerance: new FormControl( '', [Validators.required,]),
    planDetail_priceXdoc: new FormControl(0, [Validators.required]),

  });

  onSubmit(){
          const newPlans: plansend = {
           plan_name: this.form.value.plan_name as string,
           planDetail_from: this.form.value.planDetail_from as number,
           planDetail_to: this.form.value.planDetail_to as number,
           planDetail_priceXdoc: this.form.value.planDetail_priceXdoc as number,
           planDetail_tolerance: this.form.value.planDetail_tolerance as string

         };

           this.planServices.SavePlan(newPlans).subscribe({
            error(err) {
              console.log(err)
            },
           })

           console.log('New Plan Created')

           this.planServices.getPlan().subscribe({
            next:(d)=> console.log(d)
           })
  }

}

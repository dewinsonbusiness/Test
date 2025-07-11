import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { udaptedplan } from '../Interfaces/interfaces';
import { ServicesPlan } from '../Plan/services-plan';

@Component({
  selector: 'app-udapteplan',
  imports: [ReactiveFormsModule],
  templateUrl: './udapteplan.html',
  styleUrl: './udapteplan.css'
})
export class Udapteplan {
  planServices = inject(ServicesPlan)

  plansed:udaptedplan[]= []
  id:number = 1

  form = new FormGroup({
    plan_name: new FormControl('', [Validators.required]),
    planDetail_to: new FormControl( 0, [Validators.required,]),
    planDetail_from: new FormControl(0, [Validators.required]),
     planDetail_tolerance: new FormControl( '', [Validators.required,]),
    planDetail_priceXdoc: new FormControl(0, [Validators.required]),

  });

  onSubmit(){
          const newPlans: udaptedplan = {
           plan_id: this.id,
           plan_name: this.form.value.plan_name as string,
           planDetail_from: this.form.value.planDetail_from as number,
           planDetail_to: this.form.value.planDetail_to as number,
           planDetail_priceXdoc: this.form.value.planDetail_priceXdoc as number,
           planDetail_tolerance: this.form.value.planDetail_tolerance as string

         };

           this.planServices.udtapePlan(newPlans).subscribe({
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

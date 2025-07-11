import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServicesPlan } from '../services-plan';
import { Plans } from '../../Interfaces/interfaces';

@Component({
  selector: 'app-save-plans-component',
  imports: [ReactiveFormsModule],
  templateUrl: './save-plans-component.html',
  styleUrl: './save-plans-component.css'
})
export class SavePlansComponent {

  planServices = inject(ServicesPlan)

form = new FormGroup({
    plan_name: new FormControl('', [Validators.required]),
    planDetail_from: new FormControl( '', [Validators.required,]),
    planDetail_to: new FormControl('', [Validators.required]),
    planDetail_priceXdoc: new FormControl('', [Validators.required]),
    planDetail_tolerance: new FormControl( '', [Validators.required,]),




  });

  onSubmit(){








  }







}

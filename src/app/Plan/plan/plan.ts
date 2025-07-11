import { Component, inject, OnInit } from '@angular/core';
import {ServicesPlan} from '../services-plan'
import { Plans, plansend } from '../../Interfaces/interfaces';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-plan',
  imports: [],
  templateUrl: './plan.html',
  styleUrl: './plan.css'
})
export class Plan implements OnInit{


  url:string = 'http://api.portal-dev.apps.rancher.sg.local/api/create/plan'

  http = inject(HttpClient)
  PlansServices = inject(ServicesPlan)
  Plans:Plans [] = [];
  plansend:plansend[] = [];

  ngOnInit (){
  this.PlansServices.getPlan().subscribe(

  {
   next:(data)=>
   this.Plans = data as []


  }
     )
   setTimeout(() => {
  console.log(this.Plans);
}, 2000);


  }




}

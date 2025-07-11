import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Plans, plansend, udaptedplan } from '../Interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ServicesPlan {


  readonly url = "http://api.portal-dev.apps.rancher.sg.local/api/get/plans"
  readonly urlPost = "http://api.portal-dev.apps.rancher.sg.local/api/create/plan"
  readonly urlput = 'http://api.portal-dev.apps.rancher.sg.local/api/update/plan'

  readonly urldelete = "http://api.portal-dev.apps.rancher.sg.local/api/delete/plans?plan_ids=3"


    private  token = localStorage.getItem('token')

  http = inject(HttpClient)

  constructor() {
   }

readonly headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
  getPlan() {
    return this.http.get(this.url, { headers: this.headers })
  }



  SavePlan(plan:plansend){
    return this.http.post(this.urlPost,plan);
  }

  udtapePlan(plan:udaptedplan){

    return this.http.put(this.urlput, plan, { headers: this.headers });
  }

  deleteplan(id:number){

    this.http.delete(this.urldelete,{headers:this.headers})


  }

}

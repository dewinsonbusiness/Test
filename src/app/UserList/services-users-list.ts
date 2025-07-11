import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesUsersList {
    readonly url = "http://api.portal-dev.apps.rancher.sg.local/api/get/users"

   private token = localStorage.getItem('token')

  http = inject(HttpClient)

  constructor() { }

readonly headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
  GetUserslist(){

    return this.http.get(this.url, {headers:this.headers})

  }
}

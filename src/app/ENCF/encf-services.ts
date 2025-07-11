import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Encf } from '../Interfaces/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EncfServices {
  http=inject(HttpClient)

  constructor() { }
   private token = localStorage.getItem('token')

  readonly headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

  url = "http://api.portal-dev.apps.rancher.sg.local/api/get/all_encfs/1"
  getencf() {

    return this.http.post<Encf>(this.url, {}, { headers: this.headers })
  }



  }



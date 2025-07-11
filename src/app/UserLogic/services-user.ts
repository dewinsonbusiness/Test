import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { company } from '../Interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ServicesUser {
  private http = inject(HttpClient);
       password = "Rubbertape@1";
       email = "admin@banisoft.com";
  private url: string = 'http://api.portal-dev.apps.rancher.sg.local/api/auth/login';
  private urlCompany: string = 'http://api.portal-dev.apps.rancher.sg.local/api/get/companies';
  private urlCreate: string = 'http://api.portal-dev.apps.rancher.sg.local/api/create/company'

  companies:company[]=[]

  private token: string | null = null;

  constructor() {

  }
 headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });



   async login(email: string, password: string): Promise<void> {
    try {
      const data: any = await this.http.post(this.url, { email, password }).toPromise();
      this.token = data['access_token'];
      localStorage.setItem('token', data['access_token']);
      console.log('Login successful:', this.token);
    } catch (error) {
      console.error('Login failed:', error);
    }
  }


   getCompany() {
    if (!this.token) {
      console.error('No token available');
      return;
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });





    console.log('Fetching company data...');
    this.http.get(this.urlCompany, { headers }).subscribe(
      (data: any) => {
       this.companies = data
       console.log(this.companies)

      },
      (error) => {
        console.error('Error fetching company data:', error);
      }
    );
  }




     CreateCompany (company: company){
      return this.http.post(this.urlCreate, company, { headers: this.headers });
}

deleteCompany(ids: number[]) {
  const options = {
    headers: this.headers,
    body: { ids }
  };
  this.http.delete("http://api.portal-dev.apps.rancher.sg.local/api/delete/companies", options)
    .subscribe(
      response => {
        console.log('Companies deleted:', response);
      },
      error => {
        console.error('Error deleting companies:', error);
      }
    );
}

}

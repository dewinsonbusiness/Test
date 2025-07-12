import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { company } from '../Interfaces/interfaces';
import { FormGroup } from '@angular/forms';

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
  private urlUpdate: string = 'http://api.portal-dev.apps.rancher.sg.local/api/update/company'
  private refreshToken:string = 'http://api.portal-dev.apps.rancher.sg.local/api/auth/refresh'

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




     CreateCompany (form:FormGroup){
      return this.http.post(this.urlCreate, form, { headers: this.headers });
}

  getCompanies() {
    return this.http.get<company[]>(this.urlCompany, { headers: this.headers });
  }

  getToken(): string | null {
    return this.token;
  }


  setToken(token: string): void {
    this.token = token;
    localStorage.setItem('token', token);
  }
  refreshToke(){
    return this.http.get(this.refreshToken, { headers: this.headers });
    }

  isLoggedIn(): boolean {
    return !!this.token;

  }
  

  logout(): void {
    this.token = null;
    localStorage.removeItem('token');
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


     updateCompany (form:FormGroup){
      return this.http.put(this.urlUpdate, form, { headers: this.headers });
 }

}

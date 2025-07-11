import { Component, inject, OnInit } from '@angular/core';
import { ServicesUser } from '../../UserLogic/services-user';
import { company } from '../../Interfaces/interfaces';


@Component({
  selector: 'app-companies',
  imports: [],
  templateUrl: './companies.html',
  styleUrl: './companies.css'
})
export class Companies implements OnInit {
  UserServices = inject(ServicesUser)
  Companiese:company[]= []



ngOnInit(): void {

    this.initialize();

}

initialize(){




    this.UserServices.getCompany()
    setTimeout(() => {
          this.Companiese = this.UserServices.companies


    }, 1000);




}


}

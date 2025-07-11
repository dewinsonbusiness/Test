import { Component, inject, OnInit } from '@angular/core';
import { EncfServices } from '../encf-services';
import { Encf } from '../../Interfaces/interfaces';


@Component({
  selector: 'app-encf',
  imports: [],
  templateUrl: './encf.html',
  styleUrl: './encf.css'
})
export class EncfComponents implements OnInit{
  EncfServices = inject(EncfServices);
  EncfData: Encf | null = null;

  ngOnInit () {

             this.EncfServices.getencf().subscribe((data) => {
             this.EncfData = data;
             console.log(data)
   });


  }




}

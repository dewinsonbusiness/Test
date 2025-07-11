import { Component, inject, OnInit } from '@angular/core';
import { ServicesUsersList } from '../services-users-list';

@Component({
  selector: 'app-user-component',
  imports: [],
  templateUrl: './user-component.html',
  styleUrl: './user-component.css'
})
export class UserComponent implements OnInit {

  ServicesListUsers = inject(ServicesUsersList)

  ngOnInit(): void {
    this.ServicesListUsers.GetUserslist().subscribe({
      next:(data) =>
        console.log(data)
    })
  }


}

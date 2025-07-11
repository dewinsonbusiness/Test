import { Routes } from '@angular/router';
import { User } from './UserLogic/services-user/services-user';
import { Companies } from './Companies/companies/companies';
import {  EncfComponents } from './ENCF/encf/encf';
import { Plan } from './Plan/plan/plan';
import { UserComponent } from './UserList/user-component/user-component';
import { CreateComoponent } from './Companies/create-comoponent/create-comoponent';
import { SavePlansComponent } from './Plan/save-plans-component/save-plans-component';
import { Saveplan } from './Saveplan/saveplan/saveplan';
import { Udapteplan } from './udapteplan/udapteplan';
export const routes: Routes = [


    {
         path: '',
        component: User

    },

    {

    path:'companies',
    component: Companies

    },

    {
        path:'encf',
        component:EncfComponents
    },

    {

      path:'plan',
      component:Plan




    },

    {


      path:'UsersList',

      component:UserComponent
    },

    {


      path:'CreateComoponent',
      component:CreateComoponent
    },

    {

      path:'SavePlansComponent',
      component:SavePlansComponent
    },

    {

      path:'Saveplan',
      component:Saveplan
    },

    {
      path:'Udapteplan',
      component:Udapteplan
    }


];

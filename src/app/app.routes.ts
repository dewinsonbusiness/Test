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
import { Update } from './Companies/update/update';
import { authGuard } from './auth-guard';
import { Dashboard } from './Dashboard/dashboard/dashboard';
export const routes: Routes = [


    {
         path: 'login',


         component: User

    },

    {

    path:'companies',
    component: Companies,
    canActivate: [authGuard]

    },

    {
        path:'encf',
        component:EncfComponents,
        canActivate: [authGuard]
    },

    {

      path:'plan',
      component:Plan,
      canActivate: [authGuard]




    },

    {


      path:'UsersList',

      component:UserComponent,
      canActivate: [authGuard]
    },

    {


      path:'CreateComoponent',
      component:CreateComoponent,
      canActivate: [authGuard]
    },

    {

      path:'SavePlansComponent',
      component:SavePlansComponent
      ,canActivate: [authGuard]
    },

    {

      path:'Saveplan',
      component:Saveplan,
      canActivate: [authGuard]
    },

    {
      path:'Udapteplan',
      component:Udapteplan,
      canActivate: [authGuard]
    },
      {
      path:'udaptecompany',
      component:Update,
      canActivate: [authGuard]
    },
    
    {

      path:'Dashboard',
      component:Dashboard,
      canActivate: [authGuard]
    }






];

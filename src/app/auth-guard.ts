import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ServicesUser } from './UserLogic/services-user';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const servicesUser = inject(ServicesUser);
  if (!servicesUser.isLoggedIn()) {
    console.error('Access denied - User is not logged in');

    router.navigate(['/login']);
    return false;
  }
  console.log('Access granted - User is logged in');

  return servicesUser.isLoggedIn();
};

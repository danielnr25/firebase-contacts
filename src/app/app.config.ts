import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { firebaseProviders } from './firebase.config';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes,withViewTransitions(), withComponentInputBinding()), firebaseProviders] // con provideRouter() podemos definir las rutas de nuestra aplicación y con withViewTransitions() y withComponentInputBinding() podemos definir las transiciones de vista y las vinculaciones de entrada de componente.

};




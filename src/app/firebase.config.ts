import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

const firebaseProviders = [
  provideFirebaseApp(() => initializeApp(environment.firebase)), // nos permite inicializar la aplicación de Firebase con la configuración de nuestro archivo de entorno.
  provideFirestore(() => getFirestore()) // nos permite obtener una instancia de Firestore para interactuar con la base de datos.
]

export { firebaseProviders};

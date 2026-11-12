// Archivo de inicialización de Firebase
// Se utiliza para conectar la app React con los servicios de Firebase

// Importa la funcion principal para inicializar Firebase
import { initializeApp } from "firebase/app";
// Importa el servicio de autenticacion
import { getAuth } from "firebase/auth";
// Importa el servicio de Firestore
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

/* Configuración de Firebase
    Los valores se leen de variables de entorno (archivo .env, ver .env.example).
    En GitHub Actions se toman de los secretos del repositorio.
*/
export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Inicializa Firebase
export const app = initializeApp(firebaseConfig);

// Secondary app to create accounts without logging out the admin
export const secondaryApp = initializeApp(firebaseConfig, "SecondaryApp");

// Inicializa el servicio de autenticacion
export const auth = getAuth(app);
export const secondaryAuth = getAuth(secondaryApp);
// Inicializa el servicio de Firestore
export const db = getFirestore(app);
export const storage = getStorage(app);

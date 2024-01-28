// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCdRV-9MUJ_l_G620Eyl-95y4cIduuIqqI',
  authDomain: 'photostudio-react-app.firebaseapp.com',
  databaseURL:
    'https://photostudio-react-app-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'photostudio-react-app',
  storageBucket: 'photostudio-react-app.appspot.com',
  messagingSenderId: '679100450457',
  appId: '1:679100450457:web:26e5b03179505932895a08',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

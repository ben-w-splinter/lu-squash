import { initializeApp } from "firebase/app";

export function DatabaseConnection()
{
  const firebaseConfig = {
    apiKey: "AIzaSyChwmnQDmFZR6o7g2Jpq_oIbFxue-Vuw_I",
    authDomain: "lusquashladder.firebaseapp.com",
    databaseURL: "https://lusquashladder-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "lusquashladder",
    storageBucket: "lusquashladder.appspot.com",
    messagingSenderId: "237870839798",
    appId: "1:237870839798:web:9b2001351d367f7762f9d7",
    measurementId: "G-9BM1ST6QM5"
  };
    
  initializeApp(firebaseConfig);
}
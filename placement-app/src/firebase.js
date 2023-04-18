
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCvV827AJ17-V-K6Ct2GYWC_kb6FdF937w",
  authDomain: "placement-app-ddb92.firebaseapp.com",
  projectId: "placement-app-ddb92",
  storageBucket: "placement-app-ddb92.appspot.com",
  messagingSenderId: "517817931871",
  appId: "1:517817931871:web:54b2b8beadc1ec62bb63ea",
  measurementId: "G-E1SDHCXTBS"
};

const app = initializeApp(firebaseConfig);
const auth= getAuth();
export {app,auth};

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCvWClm6VqHtrH_xK18hVFsqEWc2U8QLkY",
  authDomain: "videoowl-886ef.firebaseapp.com",
  projectId: "videoowl-886ef",
  storageBucket: "videoowl-886ef.appspot.com",
  messagingSenderId: "1046047930003",
  appId: "1:1046047930003:web:67ac9776777ec3b6147f66",
  measurementId: "G-TC62T6DGBX"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);

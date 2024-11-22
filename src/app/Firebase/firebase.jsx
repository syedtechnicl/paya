import { initializeApp } from "firebase/app";

const firebaseConfig = {
  // ompal
  // apiKey: "AIzaSyAJflRpbSZ_ioUcxBc3gdpbQjvWD9zHfQ4",
  // authDomain: "testing-3664e.firebaseapp.com",
  // projectId: "testing-3664e",
  // storageBucket: "testing-3664e.firebasestorage.app",
  // messagingSenderId: "618573792092",
  // appId: "1:618573792092:web:2ebd856b2d61690de9b799",
  // measurementId: "G-Q8659488EZ",

  // this is m

  apiKey: "AIzaSyClSk9q2o59gPM3sTRVDs_y7Ru2RY8ckOw",
  authDomain: "ompal-b9f1e.firebaseapp.com",
  databaseURL: "https://ompal-b9f1e-default-rtdb.firebaseio.com",
  projectId: "ompal-b9f1e",
  storageBucket: "ompal-b9f1e.firebasestorage.app",
  messagingSenderId: "363010297420",
  appId: "1:363010297420:web:33baf40fa451d99678eee9",
  // dataBaseURL: "https://ompal-b9f1e-default-rtdb.firebaseio.com",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);




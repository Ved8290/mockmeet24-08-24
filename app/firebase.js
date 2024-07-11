
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCEATpMoHQpsL_cMyifn2xsZaTWbo7lH2s",
    authDomain: "ai-mock-interview-2e3c2.firebaseapp.com",
    projectId: "ai-mock-interview-2e3c2",
    storageBucket: "ai-mock-interview-2e3c2.appspot.com",
    messagingSenderId: "753295272385",
    appId: "1:753295272385:web:1514c89abbdb3baa752740",
    measurementId: "G-WRVS8RXJZR"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

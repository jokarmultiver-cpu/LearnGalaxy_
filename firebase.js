const firebaseConfig = {
  apiKey: "AIzaSyDc8yLCwBm5RwOdsGJjsPLQQ6Czkmwz7F8",
  authDomain: "learngalaxy-cdba1.firebaseapp.com",
  projectId: "learngalaxy-cdba1",
  storageBucket: "learngalaxy-cdba1.firebasestorage.app",
  messagingSenderId: "574221020186",
  appId: "1:574221020186:web:344406f5a5e45bd8fab5a3",
  measurementId: "G-XJ7EQD8R6T"
};

// Firebase start
firebase.initializeApp(firebaseConfig);

// Authentication
const auth = firebase.auth();
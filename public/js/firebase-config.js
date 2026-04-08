<<<<<<< HEAD
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCGM_XgttKSThQIi-Xmz6mL93T11lxdjfs",
  authDomain: "cloud-habit-tracker-fc4c6.firebaseapp.com",
  projectId: "cloud-habit-tracker-fc4c6",
  storageBucket: "cloud-habit-tracker-fc4c6.firebasestorage.app",
  messagingSenderId: "363988694379",
  appId: "1:363988694379:web:dbc470ffcd845128b1482e",
  measurementId: "G-26211MTF8G"
=======
// Firebase SDK imports (browser CDN version)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, connectAuthEmulator } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCQ_XQ4-1VoHrwnBzBB0giX2FOpxEWOd9k",
  authDomain: "lifetrack-6ef3a.firebaseapp.com",
  projectId: "lifetrack-6ef3a",
  storageBucket: "lifetrack-6ef3a.firebasestorage.app",
  messagingSenderId: "174279685286",
  appId: "1:174279685286:web:4aec808802e4bd861d7067",
>>>>>>> 201809c4c06e9d8a65c8cec40e80c06ecd077008
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

<<<<<<< HEAD
// Export Auth so register.js and login.js can use it
export const auth = getAuth(app);
=======
// Initialize Auth
const auth = getAuth(app);

// 🔥 Connect to Auth Emulator (IMPORTANT)
connectAuthEmulator(auth, "http://127.0.0.1:9099");

console.log("Firebase Auth initialized (EMULATOR MODE)");

export { auth };
>>>>>>> 201809c4c06e9d8a65c8cec40e80c06ecd077008

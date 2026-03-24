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
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
const auth = getAuth(app);

// 🔥 Connect to Auth Emulator (IMPORTANT)
connectAuthEmulator(auth, "http://127.0.0.1:9099");

console.log("Firebase Auth initialized (EMULATOR MODE)");

export { auth };
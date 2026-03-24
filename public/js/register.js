console.log("REGISTER JS LOADED");

import { auth } from "/js/firebase-config.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

window.addEventListener("DOMContentLoaded", function () {
  const closeBtn = document.getElementById("closeBtn");
  const loginTab = document.getElementById("loginTab");
  const loginNowLink = document.getElementById("loginNowLink");
  const createAccountBtn = document.getElementById("createAccountBtn");
  const messageEl = document.getElementById("registerMessage");

  const fullNameInput = document.getElementById("fullName");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirmPassword");

  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      window.location.href = "/";
    });
  }

  if (loginTab) {
    loginTab.addEventListener("click", function (e) {
      e.preventDefault();
      window.location.href = "/login";
    });
  }

  if (loginNowLink) {
    loginNowLink.addEventListener("click", function (e) {
      e.preventDefault();
      window.location.href = "/login";
    });
  }
  
  if (createAccountBtn) {
    createAccountBtn.addEventListener("click", async function (e) {
      e.preventDefault();
      console.log("BUTTON CLICKED");

      const fullName = fullNameInput?.value.trim();
      const email = emailInput?.value.trim();
      const password = passwordInput?.value;
      const confirmPassword = confirmPasswordInput?.value;

      console.log("Form values:", {
        fullName,
        email,
        passwordLength: password ? password.length : 0,
        confirmPasswordLength: confirmPassword ? confirmPassword.length : 0,
      });

      if (messageEl) messageEl.textContent = "";

      if (!fullName || !email || !password || !confirmPassword) {
        console.log("Validation failed: missing fields");
        if (messageEl) messageEl.textContent = "Please fill in all fields.";
        return;
      }

      if (password !== confirmPassword) {
        console.log("Validation failed: passwords do not match");
        if (messageEl) messageEl.textContent = "Passwords do not match.";
        return;
      }

      if (password.length < 6) {
        console.log("Validation failed: password too short");
        if (messageEl) messageEl.textContent = "Password must be at least 6 characters.";
        return;
      }

      try {
        console.log("Creating Firebase user...");
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("Firebase user created:", userCredential.user.uid);

        console.log("Sending profile to backend...");
        const response = await fetch("/api/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firebaseUid: userCredential.user.uid,
            fullName,
            email,
          }),
        });

        console.log("Backend response status:", response.status);

        const data = await response.json();
        console.log("Backend response data:", data);

        if (!response.ok) {
          if (messageEl) messageEl.textContent = data.message || "Failed to create profile.";
          return;
        }

        if (messageEl) {
          messageEl.textContent = "Registration successful. Redirecting to login...";
        }

        setTimeout(() => {
          window.location.href = "/login";
        }, 1500);
      } catch (error) {
        console.error("Registration error:", error);
        if (messageEl) {
          messageEl.textContent = error.message || "Registration failed.";
        }
      }
    });
  }
});
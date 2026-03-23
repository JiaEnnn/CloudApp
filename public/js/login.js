window.addEventListener("DOMContentLoaded", function () {
  const closeBtn = document.getElementById("closeBtn");
  const signUpTab = document.getElementById("signUpTab");
  const signUpNowLink = document.getElementById("signUpNowLink");
  const signInBtn = document.getElementById("signInBtn");

  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      window.location.href = "/";
    });
  }

  if (signUpTab) {
    signUpTab.addEventListener("click", function (e) {
      e.preventDefault();
      window.location.href = "/register";
    });
  }

  if (signUpNowLink) {
    signUpNowLink.addEventListener("click", function (e) {
      e.preventDefault();
      window.location.href = "/register";
    });
  }

  if (signInBtn) {
    signInBtn.addEventListener("click", function () {
      console.log("Sign In button clicked");
    });
  }
});
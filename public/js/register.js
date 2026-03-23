window.addEventListener("DOMContentLoaded", function () {
  const closeBtn = document.getElementById("closeBtn");
  const loginTab = document.getElementById("loginTab");
  const loginNowLink = document.getElementById("loginNowLink");
  const createAccountBtn = document.getElementById("createAccountBtn");

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
    createAccountBtn.addEventListener("click", function () {
      console.log("Create Account button clicked");
    });
  }
});
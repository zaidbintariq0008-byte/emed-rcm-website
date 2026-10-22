// eMed RCM Solutions — small site helpers
document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu
  var btn = document.querySelector(".menu-btn");
  var nav = document.querySelector("nav.main");
  if (btn && nav) {
    btn.addEventListener("click", function () { nav.classList.toggle("open"); });
  }
  // Footer year
  var y = document.getElementById("year");
  if (y) { y.textContent = new Date().getFullYear(); }
  // Lead forms (front end only — connect a form handler to receive submissions)
  document.querySelectorAll("form.box").forEach(function (f) {
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      var t = f.querySelector(".thanks");
      if (t) { t.style.display = "block"; t.scrollIntoView({ behavior: "smooth", block: "nearest" }); }
    });
  });
});

document
  .getElementsByClassName("signin")[0]
  .addEventListener("click", function () {
    let element = document.getElementsByClassName("signin-details");
    element[0].classList.toggle("active");
  });

document.getElementById("menu-bar").addEventListener("click", function () {
  let element = document.getElementById("nav-links");
  element.classList.toggle("active");
});

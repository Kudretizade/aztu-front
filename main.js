const navbarBtns = document.querySelector(".navbar ul");
const hamburgerBtn = document.querySelector(".hamburger");
document.querySelector(".hamburger").addEventListener("click", () => {
  if (navbarBtns.classList.contains("hide"))
    navbarBtns.classList.remove("hide");
  else navbarBtns.classList.add("hide");
});

function showHamburger(x) {
  if (x.matches) {
    // If media query matches
    hamburgerBtn.classList.remove("hide");
  } else {
    navbarBtns.classList.remove("hide");
    hamburgerBtn.classList.add("hide");
  }
}

var x = window.matchMedia("(max-width: 580px)");
showHamburger(x); // Call listener function at run time
x.addListener(showHamburger); // Attach listener function on state changes

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
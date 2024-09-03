let prev,next,slideIndex,slides,dots;

prev = document.querySelector(".prev");
next = document.querySelector(".next");
slides = document.getElementsByClassName("mySlides");
dots = document.getElementsByClassName("dot");

slideIndex = 0;

prev.onclick = () => plusSlides(-1);
next.onclick = () => plusSlides(1);
dots[0].onclick = function() {plusSlides(1)};
dots[1].addEventListener("click",plusSlides(2));
dots[2].addEventListener("click",plusSlides(3));

showSlides(slideIndex);

// next / previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


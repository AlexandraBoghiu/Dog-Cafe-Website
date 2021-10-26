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
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) 
  {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function functie()
{ 
 
    let textfield = document.createElement("input");
    textfield.type = "text";
    textfield.value = "";
    document.getElementById('form').appendChild(textfield);
  
} 

function alerta()
{
  alert("Ne pare rău, dar din cauza restricțiilor impuse nu putem organiza evenimente private. Mulțumim de înțelegere!");
}
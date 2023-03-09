let slides = document.getElementsByClassName("slide");
let nextBtn = document.getElementById("next-button")
let prevBtn = document.getElementById("previous-button")
let slideIndex = 1;


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}




function showSlides(n) {
  let i;
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    
  }
  
  
  slides[slideIndex].style.display = "block"
  slides[slideIndex].classList.add("blur") 

  slides[slideIndex-1].style.display = "block";
  slides[slideIndex-1].classList.remove("blur")
  
  slides[slideIndex-2].style.display = "block"
  slides[slideIndex-2].classList.add("blur")
  
  

}



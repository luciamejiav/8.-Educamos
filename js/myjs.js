//Variables globales
var slideIndex = 1

//Ejecutamos cuendo DOM ya está en memoria
document.addEventListener("DOMContentLoaded", function (e) {
    console.log("ready...")
    showSlide(slideIndex);
});

//Control Slide
function nextSlide() {
    slideIndex += 1;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex -= 1;
    showSlide(slideIndex);
}

function showSlide(n) {
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) { slideIndex = 1}
    if (n < 1) { slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
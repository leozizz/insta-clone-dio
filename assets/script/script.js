let time = 5000;
let currentImageIndex = 0;
let images = document.querySelectorAll("#slider img");
let max = images.length;

//gets the next index position and add selected class
function nextImage() {

    images[currentImageIndex].classList.remove("selected")

    currentImageIndex++

    if (currentImageIndex >= max) {
        currentImageIndex = 0
    } 

    images[currentImageIndex].classList.add("selected")
}

function start() {
    setInterval(() => {
        //change images
        nextImage()
    }, time)
}

//when window loads, execute function start
window.addEventListener("load", start)
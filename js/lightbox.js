const images = document.querySelectorAll(".img-gallery");
const imagesLight = document.querySelector(".add-image");
const containerLight = document.querySelector(".image-light");
const menu1 = document.querySelector(".menu");

images.forEach(image => {
    image.addEventListener("click", () => {
        appearImage(image.getAttribute("src"));
    })
})

containerLight.addEventListener("click", (e) => {
    if (e.target != imagesLight) {
        containerLight.classList.toggle("show");
        imagesLight.classList.toggle("showImage");
        menu1.style.opacity = "1";
    }
})

const appearImage = (image) => {
    imagesLight.src = image;
    containerLight.classList.toggle("show");
    imagesLight.classList.toggle("showImage");
    menu1.style.opacity = "0";
}


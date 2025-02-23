document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const images = document.querySelectorAll(".carousel img");
    const totalImages = images.length;

    function showImage(index) {
        images.forEach((img, i) => {
            img.style.opacity = i === index ? "1" : "0"; 
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        showImage(currentIndex);
    }

    document.querySelector(".prev").addEventListener("click", prevImage);
    document.querySelector(".next").addEventListener("click", nextImage);

    setInterval(nextImage, 3000);

    showImage(currentIndex); 
});




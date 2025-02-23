


document.addEventListener("DOMContentLoaded", function () {
    function toggleContact(id=".whatsapp-contact") {
        let contactElement = document.getElementById("whatsapp-contact");
        console.log('here')
        if (contactElement.style.display === "none" || contactElement.style.display === "") {
            contactElement.style.display = "block";
        } else {
            contactElement.style.display = "none";
        }
    }

    document.getElementById("whatsapp-icon").addEventListener("click", function () {
        toggleContact("whatsapp-contact");
    });

    
});



document.addEventListener("DOMContentLoaded", function () {
    function toggleContact(id="instagram-contact") {
        let contactElement = document.getElementById("instagram-contact");
        if (contactElement.style.display === "none" || contactElement.style.display === "") {
            contactElement.style.display = "block";
        } else {
            contactElement.style.display = "none";
        }
    }
document.getElementById("instagram-icon").addEventListener("click", function () {
    toggleContact("instagram-contact");
});
});



document.addEventListener("DOMContentLoaded", function () {
    function toggleContact(id="email-contact") {
        let contactElement = document.getElementById("email-contact");
        if (contactElement.style.display === "none" || contactElement.style.display === "") {
            contactElement.style.display = "block";
        } else {
            contactElement.style.display = "none";
        }
    }
document.getElementById("email-icon").addEventListener("click", function () {
    toggleContact("email-contact");
});
});










document.addEventListener("DOMContentLoaded", function () {
    function toggleContact(id=".whatsapp-contact-2") {
        let contactElement = document.getElementById("whatsapp-contact-2");
        console.log('here')
        if (contactElement.style.display === "none" || contactElement.style.display === "") {
            contactElement.style.display = "block";
        } else {
            contactElement.style.display = "none";
        }
    }

    document.getElementById("whatsapp-icon-2").addEventListener("click", function () {
        toggleContact("whatsapp-contact-2");
    });

    
});



document.addEventListener("DOMContentLoaded", function () {
    function toggleContact(id="instagram-contact-2") {
        let contactElement = document.getElementById("instagram-contact-2");
        if (contactElement.style.display === "none" || contactElement.style.display === "") {
            contactElement.style.display = "block";
        } else {
            contactElement.style.display = "none";
        }
    }
document.getElementById("instagram-icon-2").addEventListener("click", function () {
    toggleContact("instagram-contact-2");
});
});



document.addEventListener("DOMContentLoaded", function () {
    function toggleContact(id="email-contact-2") {
        let contactElement = document.getElementById("email-contact-2");
        if (contactElement.style.display === "none" || contactElement.style.display === "") {
            contactElement.style.display = "block";
        } else {
            contactElement.style.display = "none";
        }
    }
document.getElementById("email-icon-2").addEventListener("click", function () {
    toggleContact("email-contact-2");
});
});












function createWaveEffect() {
    const textElement = document.getElementById("waveText");
    const text = textElement.innerText;
    textElement.innerHTML = ""; 

   
    text.split("").forEach((char, index) => {
        let span = document.createElement("span");
        span.className = "wave-letter";
        span.innerText = char;
        textElement.appendChild(span);
    });

    const letters = document.querySelectorAll(".wave-letter");

    let frame = 0;
    function animateWave() {
        letters.forEach((letter, i) => {
            let yOffset = Math.sin((frame + i * 5) * 0.1) * 8; 
            letter.style.transform = `translateY(${yOffset}px)`;
        });

        frame++;
        requestAnimationFrame(animateWave);
    }

    animateWave();
}

createWaveEffect();


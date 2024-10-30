document.addEventListener('DOMContentLoaded', function() {
    const word = document.getElementById('scrolling-word');
    const container = document.getElementById('scrolling-word-container');

    // to duplicate and repeat the word 
    const repeatCount = Math.ceil(container.offsetWidth / word.offsetWidth) + 1;
    word.textContent = word.textContent.repeat(repeatCount);

    let position = 0; 
    const speed = 1; // the pace of the animation

    function scrollWord() {
        position -= speed; // that it runs from right to left you need the -=
        if (position <= -word.offsetWidth / repeatCount) {
            // if the position of the text is smaller -word.offsetWidth repeat count -> to reset the text when it disappears on the left

            position = 0;
        }
        word.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(scrollWord); // repeats the animation
    }

    scrollWord(); // starts the animation
});


// smooth scrolling when click on link 

document.addEventListener("DOMContentLoaded", function () {
    // Selektiere alle Links in der Projektübersicht, die mit "#" beginnen
    const links = document.querySelectorAll('.project-links a[href^="#"]');

    // Iteriere über alle gefundenen Links und füge ihnen den Event-Listener hinzu
    links.forEach(link => {
        const targetSection = document.querySelector(link.getAttribute('href'));
        
        if (targetSection) {
            link.addEventListener('click', function (event) {
                event.preventDefault();
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            });
        }
    });
});



// smooth scroll to top button

document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopButton = document.getElementById("scrollToTopButton");

    // Zeigt den Button an, wenn der Benutzer scrollt
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) { // Ab einer Scrollhöhe von 300px sichtbar
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });

    // Scrollt nach oben, wenn der Button geklickt wird
    scrollToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});



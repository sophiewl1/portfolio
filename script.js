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

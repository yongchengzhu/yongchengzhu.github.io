function fadeOutEffect() {
    const loader = document.querySelector('.loader');
    const inner  = document.querySelector('.inner');

    const fadeLoader = setInterval(function () {
        if (!loader.style.opacity) {
            loader.style.opacity = 1;
        }
        if (loader.style.opacity > 0) {
            loader.style.opacity -= 0.1;
        } else {
            clearInterval(fadeLoader);
        }
    }, 75);

    // Fade this every 25 milliseconds; this one will fade out first.
    const fadeInner = setInterval(function () {
        if (!inner.style.opacity) {
            inner.style.opacity = 1;
        }
        if (inner.style.opacity > 0) {
            inner.style.opacity -= 0.1;
        } else {
            clearInterval(fadeInner);
        }
    }, 25);

}

window.addEventListener('load', fadeOutEffect);

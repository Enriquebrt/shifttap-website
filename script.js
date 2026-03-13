const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const nav = document.querySelector(".nav");

const updateNav = () => {
    if (!nav) {
        return;
    }

    nav.classList.toggle("is-scrolled", window.scrollY > 18);
};

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.16,
            rootMargin: "0px 0px -8% 0px"
        }
    );

    revealElements.forEach((element) => revealObserver.observe(element));
} else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
}

document.querySelectorAll(".screenshot-slot").forEach((slot) => {
    const image = slot.querySelector(".screenshot-image");

    if (!image) {
        return;
    }

    const markReady = () => slot.classList.add("is-ready");
    const markMissing = () => slot.classList.remove("is-ready");

    if (image.complete && image.naturalWidth > 0) {
        markReady();
    } else if (image.complete) {
        markMissing();
    }

    image.addEventListener("load", markReady);
    image.addEventListener("error", markMissing);
});

if (!prefersReducedMotion) {
    const parallaxElements = Array.from(document.querySelectorAll("[data-parallax]"));
    let ticking = false;

    const updateParallax = () => {
        const viewportHeight = window.innerHeight || 1;

        parallaxElements.forEach((element) => {
            const speed = Number(element.dataset.parallax || "0");
            const rect = element.getBoundingClientRect();
            const centerOffset = rect.top + rect.height / 2 - viewportHeight / 2;
            const offset = centerOffset * speed * -0.14;
            const clampedOffset = Math.max(Math.min(offset, 50), -50);

            element.style.setProperty("--parallax-offset", `${clampedOffset}px`);
            element.style.setProperty("--parallax-speed", "1");
        });

        ticking = false;
    };

    const requestParallax = () => {
        if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
    };

    window.addEventListener("scroll", requestParallax, { passive: true });
    window.addEventListener("resize", requestParallax);
    requestParallax();
}

window.addEventListener("scroll", updateNav, { passive: true });
window.addEventListener("resize", updateNav);
updateNav();

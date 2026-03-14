"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const autoRevealSelectors = [
  ".value-grid > *",
  ".feature-overview-grid > *",
  ".operations-grid > *",
  ".benefit-grid > *",
  ".signal-grid > *",
  ".testimonial-grid > *",
  ".proof-stats > *",
  ".mini-grid > *",
  ".metric-chip-row > *",
  ".scroll-bridge > *",
  ".integration-cloud > *",
  ".forecast-stack > *",
];

const staggerGroups = [...autoRevealSelectors];

export function SiteEffects() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.lang = pathname.startsWith("/en") ? "en" : "de";

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nav = document.querySelector(".nav");

    autoRevealSelectors.forEach((selector) => {
      document.querySelectorAll(selector).forEach((element) => {
        element.classList.add("reveal");
      });
    });

    const updateNav = () => {
      if (!nav) {
        return;
      }

      nav.classList.toggle("is-scrolled", window.scrollY > 18);
    };

    const revealElements = document.querySelectorAll(".reveal");

    staggerGroups.forEach((selector) => {
      document.querySelectorAll(selector).forEach((element, index) => {
        element.style.setProperty("--reveal-delay", `${Math.min(index * 36, 180)}ms`);
      });
    });

    let revealObserver = null;

    if ("IntersectionObserver" in window && revealElements.length > 0) {
      const viewportHeight = window.innerHeight || 0;

      revealElements.forEach((element) => {
        const rect = element.getBoundingClientRect();

        if (rect.top < viewportHeight * 1.08) {
          element.classList.add("is-visible");
        }
      });

      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              revealObserver?.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.01,
          rootMargin: "0px 0px 18% 0px",
        }
      );

      revealElements.forEach((element) => {
        if (!element.classList.contains("is-visible")) {
          revealObserver.observe(element);
        }
      });
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

    let ticking = false;

    const updateParallax = () => {
      const viewportHeight = window.innerHeight || 1;
      const viewportWidth = window.innerWidth || 0;
      const documentHeight = document.documentElement.scrollHeight - viewportHeight;

      if (documentHeight > 0) {
        document.documentElement.style.setProperty("--page-scroll", `${window.scrollY / documentHeight}`);
      }

      document.querySelectorAll("[data-parallax]").forEach((element) => {
        const speed = Number(element.dataset.parallax || "0");
        const rect = element.getBoundingClientRect();
        const centerOffset = rect.top + rect.height / 2 - viewportHeight / 2;
        const offset = centerOffset * speed * -0.14;
        const clampedOffset = Math.max(Math.min(offset, 50), -50);
        const normalizedProgress = Math.max(Math.min(1 - Math.abs(centerOffset) / viewportHeight, 1), 0);

        element.style.setProperty("--parallax-offset", `${clampedOffset}px`);
        element.style.setProperty("--parallax-speed", "1");
        element.style.setProperty("--parallax-progress", normalizedProgress.toFixed(3));
      });

      document.querySelectorAll("[data-scroll-tilt]").forEach((element) => {
        if (prefersReducedMotion || viewportWidth < 900) {
          element.style.setProperty("--scroll-tilt-x", "0deg");
          element.style.setProperty("--scroll-tilt-yaw-current", "0deg");
          element.style.setProperty("--scroll-tilt-translate-current", "0px");
          element.style.setProperty("--scroll-tilt-scale-current", "1");
          return;
        }

        const range = Number(element.dataset.scrollTiltRange || "360");
        const startRotate = Number(element.dataset.scrollTiltStart || "72");
        const startTranslate = Number(element.dataset.scrollTiltTranslate || "160");
        const startScale = Number(element.dataset.scrollTiltScale || "1.06");
        const startYaw = Number(element.dataset.scrollTiltYaw || "-6");
        const rawProgress = Math.max(Math.min(window.scrollY / range, 1), 0);
        const easedProgress = 1 - Math.pow(1 - rawProgress, 3);
        const remaining = 1 - easedProgress;

        element.style.setProperty("--scroll-tilt-x", `${(startRotate * remaining).toFixed(2)}deg`);
        element.style.setProperty("--scroll-tilt-yaw-current", `${(startYaw * remaining).toFixed(2)}deg`);
        element.style.setProperty("--scroll-tilt-translate-current", `${(startTranslate * remaining).toFixed(2)}px`);
        element.style.setProperty("--scroll-tilt-scale-current", `${(1 + (startScale - 1) * remaining).toFixed(3)}`);
      });

      ticking = false;
    };

    const requestParallax = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    if (!prefersReducedMotion) {
      window.addEventListener("scroll", requestParallax, { passive: true });
      window.addEventListener("resize", requestParallax);
      requestParallax();
    }

    window.addEventListener("scroll", updateNav, { passive: true });
    window.addEventListener("resize", updateNav);
    updateNav();

    return () => {
      revealObserver?.disconnect();
      window.removeEventListener("scroll", updateNav);
      window.removeEventListener("resize", updateNav);
      window.removeEventListener("scroll", requestParallax);
      window.removeEventListener("resize", requestParallax);
    };
  }, [pathname]);

  return null;
}

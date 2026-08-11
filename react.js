(() => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  const revealTargets = Array.from(
    document.querySelectorAll(
      "h1, h2, h3, h4, h5, button, p, a, input, select, textarea, .reveal-target",
    ),
  );

  const revealNow = (element) => {
    if (!element) return;
    element.classList.add("reveal--shown");
  };

  const prepareElements = () => {
    revealTargets.forEach((element) => {
      element.classList.add("reveal");
    });
  };

  const initScrollReveal = () => {
    if (prefersReducedMotion) {
      revealTargets.forEach(revealNow);
      return;
    }

    prepareElements();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealNow(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" },
    );

    revealTargets.forEach((element) => {
      observer.observe(element);
    });
  };

  document.addEventListener("DOMContentLoaded", () => {
    initScrollReveal();
  });
})();

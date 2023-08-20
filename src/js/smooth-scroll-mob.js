document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.mob-menu-list__link');
  const menu = document.querySelector('.mob-menu');
  const body = document.querySelector('body');

  console.log(menu);
  for (const link of navLinks) {
    link.addEventListener('click', smoothScroll);
  }

  function smoothScroll(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const targetPosition = targetElement.offsetTop;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1000;
      let start = null;

      function animate(currentTime) {
        if (start === null) start = currentTime;
        const progress = currentTime - start;
        window.scrollTo(
          0,
          easeInOutCubic(progress, startPosition, distance, duration)
        );
        if (progress < duration) requestAnimationFrame(animate);
      }

      function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t * t + b;
        t -= 2;
        return (c / 2) * (t * t * t + 2) + b;
      }

      requestAnimationFrame(animate);
    }
    menu.classList.toggle('hidden-modal');
    body.classList.toggle('modal-open');
  }
});

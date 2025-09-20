document.addEventListener("DOMContentLoaded", function(){
  const sections = document.querySelectorAll('section');
  const cards = document.querySelectorAll('.vertical-card');
  const tables = document.querySelectorAll('table');
  const buttons = document.querySelectorAll('.btn');

  function scrollAnim() {
    const triggerBottom = window.innerHeight / 5 * 4;

    sections.forEach(section => {
      if (section.getBoundingClientRect().top < triggerBottom) {
        section.classList.add('show');
      }
    });

    cards.forEach(card => {
      if (card.getBoundingClientRect().top < triggerBottom) {
        card.classList.add('show');
      }
    });

    tables.forEach(table => {
      if (table.getBoundingClientRect().top < triggerBottom) {
        table.classList.add('show');
      }
    });
  }

  // Button hover bounce
  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {btn.style.transform = "scale(1.08)";});
    btn.addEventListener('mouseleave', () => {btn.style.transform = "scale(1)";});
  });

  window.addEventListener('scroll', scrollAnim);
  scrollAnim();
});

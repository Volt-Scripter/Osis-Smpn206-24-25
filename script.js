document.addEventListener("DOMContentLoaded", function(){
  const sections = document.querySelectorAll('section');
  const cards = document.querySelectorAll('.doc-card');
  const tables = document.querySelectorAll('table');

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

  window.addEventListener('scroll', scrollAnim);
  scrollAnim();
});

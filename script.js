// scroll animation untuk sections, cards, tabel
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section');
    const cards = document.querySelectorAll('.card, .doc-card, .proker-item, .sekbid-item');
    const tables = document.querySelectorAll('table');

    function scrollAnim() {
        const triggerBottom = window.innerHeight / 5 * 4;

        sections.forEach(section => {
            const top = section.getBoundingClientRect().top;
            if(top < triggerBottom) section.classList.add('show');
        });

        cards.forEach(card => {
            const top = card.getBoundingClientRect().top;
            if(top < triggerBottom) card.classList.add('show');
        });

        tables.forEach(table => {
            const top = table.getBoundingClientRect().top;
            if(top < triggerBottom) table.classList.add('show');
        });
    }

    window.addEventListener('scroll', scrollAnim);
    scrollAnim(); // biar load pertama juga muncul
});

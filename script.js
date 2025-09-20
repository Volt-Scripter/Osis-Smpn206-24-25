document.addEventListener("DOMContentLoaded", function(){
    const sections = document.querySelectorAll('section');
    const cards = document.querySelectorAll('.vertical-card');
    const tables = document.querySelectorAll('table');
    const buttons = document.querySelectorAll('.btn');

    function scrollAnim() {
        const trigger = window.innerHeight/5*4;
        sections.forEach(s => {if(s.getBoundingClientRect().top<trigger)s.classList.add('show');});
        cards.forEach(c => {if(c.getBoundingClientRect().top<trigger)c.classList.add('show');});
        tables.forEach(t => {if(t.getBoundingClientRect().top<trigger)t.classList.add('show');});
    }

    buttons.forEach(btn=>{
        btn.addEventListener('mouseenter',()=>{btn.style.transform="scale(1.08)";});
        btn.addEventListener('mouseleave',()=>{btn.style.transform="scale(1)";});
    });

    window.addEventListener('scroll',scrollAnim);
    scrollAnim();
});

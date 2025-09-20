document.addEventListener("DOMContentLoaded", function(){
  const sections=document.querySelectorAll('section');
  const cards=document.querySelectorAll('.vertical-card');
  const tables=document.querySelectorAll('table');

  function scrollAnim(){
    const trigger=window.innerHeight/5*4;
    sections.forEach(s => {if(s.getBoundingClientRect().top<trigger) s.classList.add('show');});
    cards.forEach(c => {if(c.getBoundingClientRect().top<trigger) c.classList.add('show');});
    tables.forEach(t => {if(t.getBoundingClientRect().top<trigger) t.classList.add('show');});
  }

  window.addEventListener('scroll',scrollAnim);
  scrollAnim();
});

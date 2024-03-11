const searchEl = document.querySelector('.search');
const seachInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click',function(){
  seachInputEl.focus();
});

seachInputEl.addEventListener('focus',function(){
  searchEl.classList.add('focused');
  seachInputEl.setAttribute('placeholder','통합검색');
});
seachInputEl.addEventListener('blur',function(){
  searchEl.classList.remove('focused');
  seachInputEl.setAttribute('placeholder','');
});






const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); 




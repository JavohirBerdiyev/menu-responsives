let elMenuBtn = document.getElementById('menu');
let elCloseBtn = document.getElementById('menu-close');
let elHeaderNavBtn = document.getElementById('header-nav');

elMenuBtn.addEventListener('click', function () {
    elHeaderNavBtn.classList.add('show');
    elMenuBtn.classList.add('btn-open');
});

elCloseBtn.addEventListener('click', function () {
    elHeaderNavBtn.classList.remove('show');
    elMenuBtn.classList.remove('btn-open');
});
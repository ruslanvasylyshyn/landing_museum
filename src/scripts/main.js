document.querySelector('.burger').addEventListener('click', () => {
  document.querySelector('.burger__icon').classList.toggle('active');
  document.querySelector('.burger__menu').classList.toggle('animate');
});

document
  .querySelector('.burger__nav-list')
  .addEventListener('click', () => {
    document.querySelector('.burger__icon').classList.toggle('active');
    document.querySelector('.burger__menu').classList.toggle('animate');
  });

const nav = document.querySelector('.garden-nav');

window.addEventListener('scroll', () => {
  nav.classList.toggle('shadow-sm', window.scrollY > 20);
});

document.querySelectorAll('.navbar-collapse .nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    const menu = document.querySelector('.navbar-collapse.show');
    if (menu) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});

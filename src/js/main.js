function enableHover() {
  delete window.onloadLink;
  document.querySelector('nav').classList.add('hover');
  document.removeEventListener('mousemove', onMouseMove);
}

function onMouseMove(e) {
  if (window.onloadLink && window.onloadLink !== e.target && !window.onloadLink.contains(e.target)) {
    enableHover();
    return;
  }

  document.querySelectorAll('nav a').forEach(link => {
    if (link === e.target || link.contains(e.target)) window.onloadLink = link;
  });

  if (!window.onloadLink) enableHover();
}

InstantClick.on('change', () => {
  // ga('send', 'pageview', location.pathname + location.search);
  feather.replace();
  document.addEventListener('mousemove', onMouseMove);

  Stickyfill.add(document.querySelector('nav'));

	const toggle = document.querySelector('.js-nav-toggle');
  const nav = document.querySelector('nav');

  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    document.body.classList.toggle('noscroll');
    if (nav.classList.contains('active')) toggle.src = '/img/close.svg';
    else toggle.src = '/img/menu.svg';
  });
});
 
InstantClick.init();


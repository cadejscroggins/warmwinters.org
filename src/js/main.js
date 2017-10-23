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
  document.addEventListener('mousemove', onMouseMove);
});
 
InstantClick.init(true);


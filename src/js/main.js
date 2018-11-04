(function() {
  function enableFeatherIcons() {
    feather.replace();
  }

  function enableHeroSlide() {
    const bg = document.querySelector('.hero-bg-wrapper');
    if (!bg) return;

    bg.insertAdjacentElement('beforeend', bg.children[0].cloneNode());
    let children = bg.children.length;
    let currentBg = 1;

    setInterval(function() {
      bg.style = `transition: transform 1s;` +
        `transform: translateY(-${100 * currentBg}%)`;

      if (currentBg < children - 1) return currentBg++;

      setTimeout(function() {
        bg.style = `transition: transform 0;transform: translateY(0)`;
        currentBg = 1
      }, 2000);
    }, 3000);
  }

  function enableMediumZoom() {
    mediumZoom(document.querySelectorAll('.zoom'));
  }

  function enableMobileNavToggle() {
    const toggle = document.querySelector('.js-nav-toggle');
    const toggleImg = toggle.querySelector('img');
    const nav = document.querySelector('nav');

    toggle.addEventListener('click', function() {
      nav.classList.toggle('active');
      document.body.classList.toggle('noscroll');
      if (nav.classList.contains('active')) toggleImg.src = '/img/close.svg';
      else toggleImg.src = '/img/menu.svg';
    });
  }

  function enableStatSpin() {
    window.odometerOptions = { auto: false };

    Array.from(document.querySelectorAll('.odometer')).forEach(function(el) {
      inViewport(el, { offset: 100 }, function() {
        const od = new Odometer({ el, value: 0, duration: el.dataset.duration });
        od.update(el.dataset.value);
      });
    });
  }

  function fixNavHover() {
    function enableHover() {
      delete window.onloadLink;
      document.querySelector('nav').classList.add('hover');
      document.removeEventListener('mousemove', onMouseMove);
    }

    function onMouseMove(e) {
      if (
        window.onloadLink
        && window.onloadLink !== e.target
        && !window.onloadLink.contains(e.target)
      ) {
        enableHover();
        return;
      }

      document.querySelectorAll('nav a').forEach(function(link) {
        if (link === e.target || link.contains(e.target)) {
          window.onloadLink = link;
        }
      });

      if (!window.onloadLink) enableHover();
    }

    document.addEventListener('mousemove', onMouseMove);
  }

  function polyfillStickyNav() {
    Stickyfill.add(document.querySelector('nav'));
  }

  enableFeatherIcons();
  enableHeroSlide();
  enableMediumZoom();
  enableMobileNavToggle();
  enableStatSpin();
  fixNavHover();
  polyfillStickyNav();
})();

(function () {
  'use strict';

  function renderSidebar() {
    var container = document.getElementById('sidebar');
    if (!container) return;

    var articles = window.ARTICLES || [];
    var pathname = window.location.pathname;

    // Determine active slug: no active item on index
    var isIndex =
      pathname === '/' ||
      pathname === '' ||
      /\/index\.html$/.test(pathname);

    var activeSlug = null;
    if (!isIndex) {
      var match = pathname.match(/\/([^/]+)\.html$/);
      if (match) {
        activeSlug = match[1];
      }
    }

    // Build nav HTML
    var nav = document.createElement('nav');
    nav.setAttribute('aria-label', 'Archiv článků');

    var header = document.createElement('div');
    header.className = 'sidebar-header';
    header.textContent = 'ARCHIV';
    nav.appendChild(header);

    var list = document.createElement('ul');
    list.className = 'sidebar-list';

    articles.forEach(function (article) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = article.slug + '.html';
      a.textContent = article.title;
      a.className = 'sidebar-link' + (article.slug === activeSlug ? ' active' : '');

      // Close sidebar on mobile after link click
      a.addEventListener('click', function () {
        if (window.innerWidth < 600) {
          document.body.classList.remove('sidebar-open');
        }
      });

      li.appendChild(a);
      list.appendChild(li);
    });

    nav.appendChild(list);
    container.appendChild(nav);
  }

  // Hamburger toggle
  function initHamburger() {
    var btn = document.getElementById('hamburger');
    if (!btn) return;
    btn.setAttribute('aria-expanded', 'false');
    btn.addEventListener('click', function () {
      var isOpen = document.body.classList.toggle('sidebar-open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // Overlay tap closes sidebar on mobile
  function initOverlay() {
    var overlay = document.querySelector('.sidebar-overlay');
    if (!overlay) return;
    overlay.addEventListener('click', function () {
      document.body.classList.remove('sidebar-open');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      renderSidebar();
      initHamburger();
      initOverlay();
    });
  } else {
    renderSidebar();
    initHamburger();
    initOverlay();
  }
})();

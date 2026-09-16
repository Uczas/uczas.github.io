/* Shared compact navigation. Replace the previous hamburger-button.js. */
(() => {
  function setupNavigation() {
    const header = document.querySelector('.modern-header');
    if (!header) return;
    const button = header.querySelector('.menu-toggle');
    const nav = header.querySelector('#primary-nav');
    if (!button || !nav) return;
    const mobile = window.matchMedia('(max-width: 768px)');
    const links = [...nav.querySelectorAll('a')];
    // Automatically mark the current page when reusing the header snippet.
    const pathname = location.pathname.replace(/\/index\.html$/, '/').replace(/\.html$/, '').replace(/\/$/, '') || '/';
    links.forEach(link => {
      const target = new URL(link.href).pathname.replace(/\.html$/, '').replace(/\/$/, '') || '/';
      if (pathname === target) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    const setOpen = (open, restoreFocus = false) => {
      open = Boolean(open && mobile.matches);
      nav.classList.toggle('active', open);
      button.classList.toggle('active', open);
      button.setAttribute('aria-expanded', String(open));
      button.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      if (restoreFocus) button.focus();
    };
    button.addEventListener('click', () => setOpen(button.getAttribute('aria-expanded') !== 'true'));
    document.addEventListener('click', event => { if (!header.contains(event.target)) setOpen(false); });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') setOpen(false, true);
    });
    document.addEventListener('focusin', event => { if (!header.contains(event.target)) setOpen(false); });
    links.forEach(link => link.addEventListener('click', () => setOpen(false)));
    mobile.addEventListener('change', () => setOpen(false));
    setOpen(false);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', setupNavigation);
  else setupNavigation();
})();

/**
 * Cookie Banner
 * Da diese Website keine Cookies verwendet, dient der Banner
 * nur als Informationshinweis. Gespeichert via localStorage (kein Cookie).
 */
(function () {
  var STORAGE_KEY = 'wundexperte_notice_accepted';
  var banner = document.getElementById('cookie-banner');
  if (!banner) return;

  // Bereits weggeklickt? Banner gar nicht erst zeigen.
  if (localStorage.getItem(STORAGE_KEY)) {
    banner.remove();
    return;
  }

  // Nach kurzer Verzögerung einblenden
  setTimeout(function () {
    banner.classList.add('cookie-banner--visible');
  }, 800);

  function dismiss() {
    banner.classList.remove('cookie-banner--visible');
    banner.classList.add('cookie-banner--hiding');
    setTimeout(function () { banner.remove(); }, 400);
    try { localStorage.setItem(STORAGE_KEY, '1'); } catch (e) {}
  }

  document.getElementById('cookie-accept').addEventListener('click', dismiss);
  document.getElementById('cookie-close').addEventListener('click', dismiss);
})();

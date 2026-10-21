/* Apply before styles load, then connect the theme picker after the page loads. */
(function () {
  var KEY = 'cave-brand-theme';
  var root = document.documentElement;
  var modes = ['system', 'light', 'dark', 'black'];
  var media = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  var choice = 'system';
  var picker, button, panel;

  function valid(value) { return modes.indexOf(value) !== -1 ? value : 'system'; }
  try { choice = valid(localStorage.getItem(KEY)); } catch (e) {}

  function apply() {
    var resolved = choice === 'system' ? (media && media.matches ? 'dark' : 'light') : choice;
    root.setAttribute('data-theme', resolved);
    if (!picker) return;
    var current = picker.querySelector('input[value="' + choice + '"]');
    current.checked = true;
    button.setAttribute('aria-label', picker.getAttribute('data-label') + ': ' + current.getAttribute('data-label'));
    button.title = button.getAttribute('aria-label');
    Array.prototype.forEach.call(button.querySelectorAll('[data-mode]'), function (icon) {
      if (icon.getAttribute('data-mode') === choice) icon.removeAttribute('hidden');
      else icon.setAttribute('hidden', '');
    });
  }

  function close() {
    panel.hidden = true;
    button.setAttribute('aria-expanded', 'false');
  }

  apply();
  if (media && media.addEventListener) {
    media.addEventListener('change', function () { if (choice === 'system') apply(); });
  }
  window.addEventListener('storage', function (event) {
    if (event.key === KEY || event.key === null) { choice = valid(event.newValue); apply(); }
  });

  function init() {
    picker = document.getElementById('theme-picker');
    if (!picker) return;
    button = document.getElementById('theme-button');
    panel = document.getElementById('theme-options');
    apply();
    picker.hidden = false;
    button.addEventListener('click', function () {
      var opening = panel.hidden;
      panel.hidden = !opening;
      button.setAttribute('aria-expanded', String(opening));
      if (opening) panel.querySelector('input:checked').focus();
    });
    panel.addEventListener('change', function (event) {
      if (event.target.name !== 'theme') return;
      choice = valid(event.target.value);
      try { localStorage.setItem(KEY, choice); } catch (e) {}
      apply();
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && !panel.hidden) {
        close();
        button.focus();
        event.preventDefault();
      }
    });
    document.addEventListener('click', function (event) { if (!picker.contains(event.target)) close(); });
    // Clicking label text briefly moves focus to the document before the radio.
    // Close only when another element actually receives focus outside the picker.
    document.addEventListener('focusin', function (event) { if (!picker.contains(event.target)) close(); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

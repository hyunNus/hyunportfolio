(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('#theme-toggle');
  const saved = localStorage.getItem('portfolio-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark ? 'dark' : 'light');

  const applyTheme = (value) => {
    root.dataset.theme = value;
    toggle?.setAttribute('aria-label', value === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  };

  applyTheme(theme);
  toggle?.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('portfolio-theme', next);
    applyTheme(next);
  });

  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
})();

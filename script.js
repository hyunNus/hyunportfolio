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

  const changeTheme = (value) => {
    if (document.startViewTransition) {
      document.startViewTransition(() => applyTheme(value));
    } else {
      applyTheme(value);
    }
  };

  applyTheme(theme);
  toggle?.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('portfolio-theme', next);
    changeTheme(next);
  });

  let lastTrigger = null;
  document.querySelectorAll('[data-modal]').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const modal = document.getElementById(trigger.dataset.modal);
      if (!modal) return;
      lastTrigger = trigger;
      modal.showModal();
      modal.querySelector('.modal-close')?.focus();
    });
  });

  document.querySelectorAll('.project-modal').forEach((modal) => {
    modal.addEventListener('click', (event) => {
      if (event.target === modal) modal.close();
    });
    modal.addEventListener('close', () => {
      lastTrigger?.focus();
      lastTrigger = null;
    });
  });

  document.querySelectorAll('[data-close-modal]').forEach((control) => {
    control.addEventListener('click', () => control.closest('dialog')?.close());
  });

  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
})();

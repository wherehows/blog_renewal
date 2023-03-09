const isTheme = (theme: string): theme is Theme =>
  theme === 'dark' || theme === 'light';

function setTheme(theme: Theme) {
  window.__theme = theme;

  if (theme === 'dark') {
    document.body.className = 'dark';
  } else {
    document.body.className = 'light';
  }
}

window.__setPreferredTheme = function (theme) {
  setTheme(theme);

  try {
    localStorage.setItem('preferred-theme', theme);
  } catch (e) {
    console.error(e);
  }
};

let preferredTheme: Theme | null = null;

try {
  const storedTheme = localStorage.getItem('preferred-theme');

  if (storedTheme && isTheme(storedTheme)) {
    preferredTheme = storedTheme;
  }
} catch (e) {
  console.error(e);
}

const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));

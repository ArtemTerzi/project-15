const themeCheckBox = document.querySelector('.theme-swapper__checkbox');
const body = document.querySelector('body');

const themeToggleLight = document.querySelector('.theme-toggle--light');
const themeToggleDark = document.querySelector('.theme-toggle--dark');
const themeWrapperLight = document.querySelector('.theme-wrapper--light');
const themeWrapperDark = document.querySelector('.theme-wrapper--dark');

let checked = localStorage.getItem('checked');

themeSwitcherToggle(checked);

themeToggleLight.addEventListener('click', () => {
  checked = 'true';
  themeSwitcherToggle(checked);
  localStorage.setItem('checked', checked);
});

themeToggleDark.addEventListener('click', () => {
  checked = 'false';
  themeSwitcherToggle(checked);
  localStorage.setItem('checked', checked);
});

function themeSwitcherToggle(checked) {
  if (checked === 'true') {
    body.classList.add('dark-theme');
    themeToggleLight.classList.remove('switch-on');
    themeWrapperLight.classList.remove('switch-on');
    themeToggleDark.classList.add('switch-on');
    themeWrapperDark.classList.add('switch-on');
  } else {
    body.classList.remove('dark-theme');
    themeToggleLight.classList.add('switch-on');
    themeWrapperLight.classList.add('switch-on');
    themeWrapperDark.classList.remove('switch-on');
    themeToggleDark.classList.remove('switch-on');
  }
}

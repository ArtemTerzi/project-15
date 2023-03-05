
// const themeCheckBox = document.querySelector('.theme-swapper__checkbox');
const body = document.querySelector('body');
const themeWrapperLight = document.querySelector('.theme-wrapper--light');
const themeWrapperDark = document.querySelector('.theme-wrapper--dark');
const checkbox = document.querySelector('.checkbox');

let checked = localStorage.getItem('checked');

themeSwitcherToggle(checked);

checkbox.addEventListener('click', onCheckboxClick)

function onCheckboxClick() {
  checked === 'true' ? checked = 'false' : checked = 'true'
  
  themeSwitcherToggle(checked);
  localStorage.setItem('checked', checked);
}

function themeSwitcherToggle(checked) {
  if (checked === 'true') {
    body.classList.add('dark-theme');
    themeWrapperLight.classList.remove('switch-on');
    themeWrapperDark.classList.add('switch-on');
    checkbox.classList.add('checkbox-on');
  } else {
    body.classList.remove('dark-theme');
    themeWrapperLight.classList.add('switch-on');
    themeWrapperDark.classList.remove('switch-on');
    checkbox.classList.remove('checkbox-on');
  }
}

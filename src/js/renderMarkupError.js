import { getMarkupError } from './error';

export function renderMarkupError(parent) {
  // const parEl = document.querySelector(`${parent}`);
  const parEl = document.querySelector('.home__list');
  parEl.innerHTML = `${getMarkupError()}`;
}

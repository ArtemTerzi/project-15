import { getMarkupError } from './error';

export function renderMarkupError(parent) {
  const parEl = document.querySelector(`${parent}`);
  parEl.innerHTML = `${getMarkupError()}`;
}

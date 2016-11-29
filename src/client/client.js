import ReactDOM from 'react-dom';
import logger from './common/logger';
import App from './app';

import { window, document } from './common/globals';

import './common/style/index.scss';

async function main() {
  const divs = Array.from(document.querySelectorAll('body > div'));
  for (const div of divs) {
    div.parentNode.removeChild(div);
  }

  const target = document.createElement('div');
  target.id = 'app';
  document.body.appendChild(target);

  // TODO: Initialize Store
  const store = {};
  ReactDOM.render(
    <App store={store} />,
    target
  );
}

export default main;

if (window.self && document) {
  main().catch(logger.error);
}

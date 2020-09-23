import { render } from 'solid-js/dom';
import App from './App';
import { Provider } from './store';

render(() => (
  <Provider>
    <App />
  </Provider>
), document.body);

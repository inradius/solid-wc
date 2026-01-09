/* @refresh reload */
import App from '@app';
import { render } from 'solid-js/web';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error('Root element not found. Did you forget to add it to index.html?');
}

const enableMocking = async () => {
  if (import.meta.env.MODE !== 'development') return;
  const { devAppServer } = await import('@mocks/app/dev');
  devAppServer.start({ onUnhandledRequest: 'bypass' });
};

enableMocking().finally(() => render(() => <App />, root!));

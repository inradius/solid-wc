import { http } from 'msw';
import { setupWorker } from 'msw/browser';

const devAppHandlers = [
  http.get('/api/app', () => {
    return new Response(JSON.stringify({ message: 'Hello World' }));
  })
];

export const devAppServer = setupWorker(...devAppHandlers);

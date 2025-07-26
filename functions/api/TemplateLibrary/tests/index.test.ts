import { handleRequest } from '../index';

self.addEventListener('test', (event) => {
  event.waitUntil(runTests());
});

async function runTests() {
  const request = new Request('/api/template', { method: 'POST', body: JSON.stringify({ careerDetails: 'test', industry: 'IT' }) });
  const response = await handleRequest(request);
  console.assert(response.status === 200, 'Expected 200 OK');
}
import { processTemplateRequest } from '../service';

self.addEventListener('test', (event) => {
  event.waitUntil(runServiceTests());
});

async function runServiceTests() {
  const request = new Request('/api/template', { method: 'POST', body: JSON.stringify({ careerDetails: 'test', industry: 'IT' }) });
  const response = await processTemplateRequest(request);
  const responseData = await response.json();
  console.assert(responseData.content.includes('Generated content'), 'Expected content to be generated');
}
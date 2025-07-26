import { aiGenerateTemplate } from './utils/aiGenerator';
import { nlpProcessText } from './utils/nlpProcessor';
import { Template } from './model';
import { saveTemplate } from './repository';

export async function processTemplateRequest(request: Request): Promise<Response> {
  const requestData = await request.json();
  const processedData = nlpProcessText(requestData);
  const generatedTemplate = aiGenerateTemplate(processedData);
  const savedTemplate = await saveTemplate(generatedTemplate);
  return new Response(JSON.stringify(savedTemplate), { status: 200, headers: { 'Content-Type': 'application/json' } });
}
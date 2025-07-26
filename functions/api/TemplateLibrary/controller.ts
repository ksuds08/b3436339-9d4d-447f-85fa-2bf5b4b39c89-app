import { validateTemplateRequest } from './utils/validators';
import { processTemplateRequest } from './service';

export async function templateLibraryController(request: Request): Promise<Response> {
  const { isValid, message } = validateTemplateRequest(request);
  if (!isValid) {
    return new Response(JSON.stringify({ error: message }), { status: 400, headers: { 'Content-Type': 'application/json' } });
  }
  return processTemplateRequest(request);
}
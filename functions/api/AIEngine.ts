import { AIController } from './controllers/AIController';

export async function handleRequest(request: Request): Promise<Response> {
  try {
    const response = await AIController.processRequest(request);
    return response;
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
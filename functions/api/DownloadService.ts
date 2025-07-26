import { handleDownloadRequest } from './services/AIEngine';
import { authenticateUser } from './middleware/authentication';
import { logError, logRequest } from './utils/logger';

export async function handleRequest(request: Request): Promise<Response> {
  try {
    if (!authenticateUser(request)) {
      return new Response('Unauthorized', { status: 401 });
    }
    logRequest(request);
    const response = await handleDownloadRequest(request);
    return new Response(response, { status: 200 });
  } catch (error) {
    logError(error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
import { AIProcessor } from '../services/AIProcessor';
import { validateResumeModel } from '../models/ResumeModel';

export class AIController {
  public static async processRequest(request: Request): Promise<Response> {
    const requestData = await request.json();
    if (!validateResumeModel(requestData)) {
      return new Response(JSON.stringify({ error: 'Invalid resume data' }), { status: 400 });
    }
    const template = AIProcessor.generateCustomizedTemplate(requestData);
    return new Response(JSON.stringify({ template }), { status: 200 });
  }
}
import { Template } from '../model';

export function aiGenerateTemplate(processedData: { careerDetails: string; industry: string; keywords: string[] }): Template {
  const template: Template = {
    id: generateUniqueId(),
    userId: 'exampleUserId',
    content: `Generated content for ${processedData.industry}`,
    industry: processedData.industry
  };
  return template;
}

function generateUniqueId(): string {
  return Math.random().toString(36).substr(2, 9);
}
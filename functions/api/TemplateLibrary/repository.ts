import { Template } from './model';

const templateStorage: { [key: string]: Template } = {};

export async function saveTemplate(template: Template): Promise<Template> {
  templateStorage[template.id] = template;
  return template;
}

export async function getTemplate(id: string): Promise<Template | null> {
  return templateStorage[id] || null;
}
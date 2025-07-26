export interface Template {
  id: string;
  userId: string;
  content: string;
  industry: string;
}

export type TemplateRequest = {
  userId: string;
  careerDetails: string;
  industry: string;
};
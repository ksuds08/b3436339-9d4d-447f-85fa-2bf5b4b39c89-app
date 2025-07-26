export interface ResumeModel {
  name: string;
  contactInformation: string;
  careerObjective: string;
  workExperience: string[];
  education: string[];
  skills: string[];
  industry: string;
}

export function validateResumeModel(data: any): data is ResumeModel {
  return typeof data.name === 'string' &&
    typeof data.contactInformation === 'string' &&
    typeof data.careerObjective === 'string' &&
    Array.isArray(data.workExperience) &&
    Array.isArray(data.education) &&
    Array.isArray(data.skills) &&
    typeof data.industry === 'string';
}
export class NLPService {
  public static analyzeCareerDetails(details: string): string[] {
    // Implement NLP logic to analyze career details
    return details.split(' ').map(word => word.toLowerCase());
  }
}
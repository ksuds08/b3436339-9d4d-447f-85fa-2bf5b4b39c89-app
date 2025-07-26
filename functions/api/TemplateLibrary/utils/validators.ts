export function validateTemplateRequest(request: Request): { isValid: boolean; message: string } {
  if (request.headers.get('Content-Type') !== 'application/json') {
    return { isValid: false, message: 'Invalid Content-Type' };
  }
  // Additional validation logic here
  return { isValid: true, message: '' };
}
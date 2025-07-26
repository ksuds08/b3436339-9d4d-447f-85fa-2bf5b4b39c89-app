export function capitalizeFirstLetter(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function sanitizeInput(input: string): string {
  return input.replace(/[^a-zA-Z0-9 .,]/g, '');
}
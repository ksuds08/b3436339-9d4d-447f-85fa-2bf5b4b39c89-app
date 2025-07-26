export async function authMiddleware(request: Request): Promise<boolean> {
  const authorization = request.headers.get('Authorization');
  if (!authorization || !authorization.startsWith('Bearer ')) {
    return false;
  }
  // Validate token (mock implementation)
  const token = authorization.split(' ')[1];
  return token === 'valid-token';
}
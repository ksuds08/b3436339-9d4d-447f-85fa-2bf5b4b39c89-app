import { handleRequest } from '../AIEngine';

async function mockRequest(data: any, token: string): Promise<Request> {
  return new Request('https://example.com/api', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
    body: JSON.stringify(data),
  });
}

describe('AIEngine', () => {
  test('should return customized template for valid resume data', async () => {
    const request = await mockRequest({
      name: 'John Doe',
      contactInformation: 'john.doe@example.com',
      careerObjective: 'Software Developer',
      workExperience: ['Company A', 'Company B'],
      education: ['University X'],
      skills: ['JavaScript', 'TypeScript'],
      industry: 'Technology'
    }, 'valid-token');

    const response = await handleRequest(request);
    expect(response.status).toBe(200);
  });

  test('should return error for invalid resume data', async () => {
    const request = await mockRequest({}, 'valid-token');
    const response = await handleRequest(request);
    expect(response.status).toBe(400);
  });

  test('should return error for unauthorized request', async () => {
    const request = await mockRequest({
      name: 'John Doe',
      contactInformation: 'john.doe@example.com',
      careerObjective: 'Software Developer',
      workExperience: ['Company A', 'Company B'],
      education: ['University X'],
      skills: ['JavaScript', 'TypeScript'],
      industry: 'Technology'
    }, 'invalid-token');

    const response = await handleRequest(request);
    expect(response.status).toBe(401);
  });
});
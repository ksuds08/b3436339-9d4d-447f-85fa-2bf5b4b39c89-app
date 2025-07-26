addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request: Request): Promise<Response> {
  try {
    const response = await templateLibraryController(request);
    return response;
  } catch (error) {
    return new Response('Internal Server Error', { status: 500 });
  }
}
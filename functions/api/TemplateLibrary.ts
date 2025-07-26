import { Request, Response } from "@cloudflare/workers-types";

export async function TemplateLibraryHandler(req: Request): Promise<Response> {
  try {
    if (req.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
        status: 405,
        headers: { "Content-Type": "application/json" }
      });
    }

    const contentType = req.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return new Response(JSON.stringify({ error: "Unsupported Media Type" }), {
        status: 415,
        headers: { "Content-Type": "application/json" }
      });
    }

    const requestBody = await req.json();

    if (!requestBody || typeof requestBody !== "object") {
      return new Response(JSON.stringify({ error: "Bad Request" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    // Placeholder for future logic to handle the request body
    const templates = [
      { id: 1, name: "Professional", description: "A clean, professional resume template." },
      { id: 2, name: "Modern", description: "A sleek, modern resume template." }
    ];

    return new Response(JSON.stringify({ templates }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}

import { createResponsesCall } from "../_shared/responses.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-lovable-aig-run-id",
};

const SYSTEM_PROMPT = `You are the AI assistant on Hemant Verma's professional portfolio website. Your job is to answer visitors' questions about Hemant accurately and warmly, based ONLY on the profile below. If asked something not covered by the profile, say you don't have that information and suggest contacting Hemant directly. Keep answers concise (2-4 sentences), professional, and friendly. Never invent facts.

PROFILE:
- Name: Hemant Verma
- Title: Project & Product Manager
- Location: Mumbai, India (open to remote and hybrid opportunities)
- Experience: 5+ years in SaaS product management, client delivery, and custom software development
- Contact: manage.verma.hemant@gmail.com, +91 7506461645, LinkedIn: linkedin.com/in/vermahemantprakash

EXPERTISE:
- SaaS product management and roadmap planning
- Agile/Scrum project delivery
- Client relationship management and delivery
- Custom software development oversight
- AI-driven solutions

NOTABLE PROJECTS:
- Council App: a transparent voting system used by NMITD

Answer as a helpful representative of Hemant's portfolio — encourage visitors to reach out via the contact section for opportunities and collaborations.`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const apiKey = Deno.env.get("LOVABLE_API_KEY");
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "AI service is not configured." }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { messages } = await req.json();
    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: "Please provide a message." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const modelMessages = messages
      .filter((m: { role?: string; content?: unknown }) =>
        (m.role === "user" || m.role === "assistant") && typeof m.content === "string"
      )
      .slice(-20)
      .map((m: { role: string; content: string }) => ({ role: m.role as "user" | "assistant", content: m.content }));

    const call = createResponsesCall(
      req,
      { baseURL: "https://ai.gateway.lovable.dev/v1", apiKey, model: "openai/gpt-6-astra" },
      modelMessages,
      SYSTEM_PROMPT,
    );

    const response = call.response();
    const headers = new Headers(response.headers);
    Object.entries(corsHeaders).forEach(([k, v]) => headers.set(k, v));
    return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      return new Response(null, { status: 499, headers: corsHeaders });
    }
    console.error("portfolio-assistant error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Something went wrong. Please try again." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});

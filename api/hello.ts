// Vercel API route types
interface VercelRequest {
  query: Record<string, string | string[] | undefined>;
  body?: unknown;
  cookies?: Record<string, string>;
  headers?: Record<string, string | string[] | undefined>;
  method?: string;
  url?: string;
}

interface VercelResponse {
  status: (code: number) => VercelResponse;
  send: (body: string) => void;
  json: (body: unknown) => void;
  redirect: (url: string) => void;
  setHeader: (name: string, value: string) => void;
}

export default function handler(req: VercelRequest, res: VercelResponse): void {
  const { name = 'World' } = req.query;
  const nameValue = Array.isArray(name) ? name[0] : name || 'World';
  res.status(200).send(`Hello ${nameValue}!`);
}

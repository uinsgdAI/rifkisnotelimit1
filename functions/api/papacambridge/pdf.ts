import { isAllowedPapaCambridgePdfUrl } from '../../../src/utils/papacambridge';

export async function onRequestGet(context: { request: Request }): Promise<Response> {
  const reqUrl = new URL(context.request.url);
  const rawUrl = reqUrl.searchParams.get('url') || '';
  const parsed = isAllowedPapaCambridgePdfUrl(rawUrl);

  if (!parsed) {
    return new Response(
      JSON.stringify({ error: 'Invalid or disallowed PapaCambridge PDF URL' }),
      {
        status: 403,
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
      }
    );
  }

  try {
    const upstream = await fetch(parsed.toString(), {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Cambridge0580StudyAssistant/1.0)',
      },
      signal: AbortSignal.timeout(15000),
    });

    if (!upstream.ok) {
      return new Response(
        JSON.stringify({ error: `Upstream returned ${upstream.status}` }),
        {
          status: upstream.status,
          headers: { 'Content-Type': 'application/json; charset=utf-8' },
        }
      );
    }

    const contentType = upstream.headers.get('content-type') || 'application/pdf';
    const filename = parsed.pathname.split('/').pop() || '0580.pdf';

    return new Response(upstream.body, {
      status: 200,
      headers: {
        'Content-Type': contentType.includes('pdf') ? 'application/pdf' : contentType,
        'Content-Disposition': `inline; filename="${filename}"`,
        'Cache-Control': 'public, max-age=86400',
      },
    });
  } catch {
    return new Response(
      JSON.stringify({ error: 'Failed to retrieve PDF from PapaCambridge' }),
      {
        status: 502,
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
      }
    );
  }
}

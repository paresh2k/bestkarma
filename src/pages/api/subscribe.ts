export const prerender = false;

import type { APIRoute } from 'astro';

const PUBLICATION_ID = '1a8fae95-b89d-4826-93a8-37eb7b61449f';

export const POST: APIRoute = async ({ request }) => {
  const apiKey = import.meta.env.BEEHIIV_API_KEY;

  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'Newsletter service not configured.' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let email: string;
  try {
    const body = await request.json();
    email = body.email?.trim();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response(JSON.stringify({ error: 'Please enter a valid email address.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const res = await fetch(
    `https://api.beehiiv.com/v2/publications/${PUBLICATION_ID}/subscriptions`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        email,
        reactivate_existing: false,
        send_welcome_email: true,
        utm_source: 'bestkarma-website',
      }),
    }
  );

  if (!res.ok) {
    const text = await res.text();
    console.error('Beehiiv API error:', res.status, text);
    return new Response(JSON.stringify({ error: 'Could not subscribe. Please try again.' }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};

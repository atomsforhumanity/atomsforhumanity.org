import type { APIRoute } from "astro";

const routes = ["/", "/work", "/technology", "/about", "/team", "/organization", "/donate"];

export const GET: APIRoute = () => {
  const urls = routes
    .map((route) => `  <url><loc>https://www.atomsforhumanity.org${route}</loc></url>`)
    .join("\n");

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`, {
    headers: { "Content-Type": "application/xml" },
  });
};

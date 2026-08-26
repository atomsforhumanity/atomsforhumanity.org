import { existsSync, readFileSync } from "node:fs";
import { extname, join } from "node:path";

const outputDirectory = "dist";
const pages = [
  ["/", "index.html"],
  ["/work", "work/index.html"],
  ["/technology", "technology/index.html"],
  ["/about", "about/index.html"],
  ["/team", "team/index.html"],
  ["/organization", "organization/index.html"],
  ["/donate", "donate/index.html"],
];

const pageHtml = new Map(
  pages.map(([route, file]) => [route, readFileSync(join(outputDirectory, file), "utf8")]),
);
const failures = [];
const titles = new Set();

function plainText(html) {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

for (const [route, html] of pageHtml) {
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  const canonical = html.match(/rel="canonical" href="([^"]+)"/)?.[1];
  const headings = html.match(/<h1(?:\s|>)/g)?.length ?? 0;

  if (!title || titles.has(title)) failures.push(`${route}: missing or duplicate title`);
  if (title) titles.add(title);
  if (canonical !== `https://atomsforhumanity.org${route}`) failures.push(`${route}: invalid canonical URL`);
  if (headings !== 1) failures.push(`${route}: expected one h1, found ${headings}`);

  const internalResources = [...html.matchAll(/(?:href|src)="(\/[^"#?]*)/g)].map((match) => match[1]);
  for (const resource of internalResources) {
    const target = resource === "/"
      ? join(outputDirectory, "index.html")
      : extname(resource)
        ? join(outputDirectory, resource)
        : join(outputDirectory, resource, "index.html");
    if (!existsSync(target)) failures.push(`${route}: unresolved internal resource ${resource}`);
  }

  const footerText = plainText(html.slice(html.indexOf("<footer")));
  for (const fact of ["Atoms for Humanity Corp", "501(c)(3) public charity", "EIN 41-5138821", "107 Plaza Trusco", "Taos, NM 87571"]) {
    if (!footerText.includes(fact)) failures.push(`${route}: footer is missing ${fact}`);
  }
}

const organizationText = plainText(pageHtml.get("/organization"));
for (const fact of [
  "Atoms for Humanity Corp",
  "Atoms for Humanity",
  "501(c)(3) public charity",
  "41-5138821",
  "Delaware",
  "March 2026",
  "107 Plaza Trusco Taos, NM 87571 United States",
  "1518 Paseo Del Pueblo Norte #1282 El Prado, NM 87529-8055 United States",
  "Accelerating humanity's transition to a sustainable molecular future.",
]) {
  if (!organizationText.includes(fact)) failures.push(`/organization: missing verification fact ${fact}`);
}

const sitemap = readFileSync(join(outputDirectory, "sitemap.xml"), "utf8");
for (const [route] of pages) {
  if (!sitemap.includes(`<loc>https://atomsforhumanity.org${route}</loc>`)) failures.push(`sitemap: missing ${route}`);
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Verified ${pages.length} routes, internal links, metadata, sitemap entries, and nonprofit identity.`);

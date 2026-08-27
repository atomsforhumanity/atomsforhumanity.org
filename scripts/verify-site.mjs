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
const descriptions = new Set();

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
  const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
  const canonical = html.match(/rel="canonical" href="([^"]+)"/)?.[1];
  const headings = html.match(/<h1(?:\s|>)/g)?.length ?? 0;

  if (!title || titles.has(title)) failures.push(`${route}: missing or duplicate title`);
  if (title) titles.add(title);
  if (!description || descriptions.has(description)) failures.push(`${route}: missing or duplicate meta description`);
  if (description) descriptions.add(description);
  if (canonical !== `https://www.atomsforhumanity.org${route}`) failures.push(`${route}: invalid canonical URL`);
  if (headings !== 1) failures.push(`${route}: expected one h1, found ${headings}`);
  if (!html.includes(`<meta property="og:title" content="${title}"`)) failures.push(`${route}: Open Graph title does not match page title`);
  if (!html.includes(`<meta property="og:description" content="${description}"`)) failures.push(`${route}: Open Graph description does not match meta description`);
  if (!html.includes(`<meta property="og:url" content="${canonical}"`)) failures.push(`${route}: Open Graph URL does not match canonical URL`);
  if (!html.includes(`<meta property="og:image" content="https://www.atomsforhumanity.org/social-card.png"`)) failures.push(`${route}: missing production social card`);
  if (!html.includes(`<meta name="twitter:card" content="summary_large_image"`)) failures.push(`${route}: missing Twitter card metadata`);
  if (!html.includes(`<main id="main-content" tabindex="-1">`)) failures.push(`${route}: main landmark is not a keyboard-focusable skip-link target`);

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

const technologyHtml = pageHtml.get("/technology");
for (const href of [
  "https://github.com/atomsforhumanity/qcconst",
  "https://github.com/atomsforhumanity/qcdata",
  "https://qcdata.docs.atomsforhumanity.org/",
  "https://github.com/atomsforhumanity/qcinf",
  "https://github.com/atomsforhumanity/qccodec",
  "https://github.com/atomsforhumanity/qccompute",
  "https://qccompute.docs.atomsforhumanity.org/",
  "https://github.com/mtzgroup/bigchem",
  "https://github.com/mtzgroup/chemcloud-server",
  "https://github.com/mtzgroup/chemcloud-client",
]) {
  if (!technologyHtml.includes(`href="${href}" target="_blank" rel="noopener noreferrer"`)) {
    failures.push(`/technology: project link does not open safely in a new tab: ${href}`);
  }
}

const organizationHtml = pageHtml.get("/organization");
for (const href of [
  "/documents/certificate-of-incorporation.pdf",
  "/documents/bylaws.pdf",
  "/documents/irs-determination-letter.pdf",
]) {
  if (!organizationHtml.includes(`href="${href}" target="_blank" rel="noopener"`)) {
    failures.push(`/organization: PDF link does not open safely in a new tab: ${href}`);
  }
}

const schemaMatch = pageHtml.get("/").match(/<script type="application\/ld\+json">(.*?)<\/script>/);
const schema = schemaMatch ? JSON.parse(schemaMatch[1]) : null;
for (const [property, expected] of Object.entries({
  "@type": "NonprofitOrganization",
  name: "Atoms for Humanity",
  legalName: "Atoms for Humanity Corp",
  url: "https://www.atomsforhumanity.org",
  taxID: "41-5138821",
  nonprofitStatus: "https://schema.org/Nonprofit501c3",
})) {
  if (schema?.[property] !== expected) failures.push(`structured data: invalid ${property}`);
}
if (schema?.address?.streetAddress !== "107 Plaza Trusco" || schema?.address?.postalCode !== "87571") {
  failures.push("structured data: invalid physical address");
}

for (const file of [
  "social-card.png",
  "images/team/colton-hicks.webp",
  "images/team/maryanna-saenko.webp",
  "images/team/mel-van-londen.webp",
  "images/team/jan-estrada-pabon.webp",
  "documents/certificate-of-incorporation.pdf",
  "documents/bylaws.pdf",
  "documents/irs-determination-letter.pdf",
]) {
  if (!existsSync(join(outputDirectory, file))) failures.push(`build output: missing ${file}`);
}

const builtCssHref = pageHtml.get("/").match(/href="(\/_astro\/BaseLayout\.[^"]+\.css)"/)?.[1];
if (!builtCssHref) {
  failures.push("styles: missing global stylesheet");
} else {
  const builtCss = readFileSync(join(outputDirectory, builtCssHref.slice(1)), "utf8");
  if (!builtCss.includes("prefers-reduced-motion:reduce")) failures.push("styles: missing reduced-motion treatment");
}

const robots = readFileSync(join(outputDirectory, "robots.txt"), "utf8");
if (!robots.includes("Sitemap: https://www.atomsforhumanity.org/sitemap.xml")) failures.push("robots: invalid sitemap URL");

const sitemap = readFileSync(join(outputDirectory, "sitemap.xml"), "utf8");
for (const [route] of pages) {
  if (!sitemap.includes(`<loc>https://www.atomsforhumanity.org${route}</loc>`)) failures.push(`sitemap: missing ${route}`);
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Verified ${pages.length} routes, internal links, metadata, structured nonprofit identity, assets, documents, reduced motion, sitemap, robots, and project/PDF new-tab behavior.`);

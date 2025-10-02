# atomsforhumanity.org

This repository contains the source code for the **Atoms for Humanity** landing page.

## Overview

- A simple static site served with **GitHub Pages**.
- Custom domain: [https://atomsforhumanity.org](https://atomsforhumanity.org).
- `www.atomsforhumanity.org` redirects to the apex domain.

## Structure

```
.
├── index.html         # Main landing page
├── assets/            # Optimized images, fonts, etc.
│   └── images/
└── CNAME              # Contains "atomsforhumanity.org"
```

## Local Preview

Serve locally with Python:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).
For testing on mobile, use your machine’s LAN IP (e.g. `http://192.168.x.x:8000`).

## Deployment

- **Branch:** `master` (GitHub Pages is set to deploy from here).
- Every push/merge to `master` automatically triggers a rebuild and redeploy to GitHub Pages.
- Custom domain + HTTPS handled by GitHub.

## Workflow

- Create feature branches (`feature-*`).
- Merge into `master` → site redeploys automatically.

## Image Optimization

All large images should be optimized into AVIF/WebP formats at multiple sizes, then referenced with a <picture> element for responsive loading.

Example ImageMagick commands:

### AVIF (high compression, modern)

magick source.png -resize 1200 -strip -quality 60 assets/images/example-1200.avif
magick source.png -resize 2000 -strip -quality 60 assets/images/example-2000.avif

### WebP fallback
```sh
magick (or convert) source.png -resize 1200 -strip -quality 80 assets/images/example-1200.webp
magick (or convert) source.png -resize 2000 -strip -quality 80 assets/images/example-2000.webp
```
Then in HTML:

```html
<picture>
  <source
    type="image/avif"
    srcset="
      assets/images/example-1200.avif 1200w,
      assets/images/example-2000.avif 2000w
    "
    sizes="(max-width: 900px) 80vw, 600px"
  />
  <source
    type="image/webp"
    srcset="
      assets/images/example-1200.webp 1200w,
      assets/images/example-2000.webp 2000w
    "
    sizes="(max-width: 900px) 80vw, 600px"
  />
  <img
    src="assets/images/example-1200.webp"
    alt="Description of image"
    width="1200"
    height="1200"
    loading="eager"
    decoding="async"
  />
</picture>
```

This ensures the site stays fast and mobile-friendly.

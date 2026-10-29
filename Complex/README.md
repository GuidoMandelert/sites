# Guido — Version 2 Personal Website

A self-contained, single-page personal website for Guido's AI-guided webpage coursework. It uses only HTML, CSS, and JavaScript, so it can be published directly with GitHub Pages.

## Project files

- `index.html` — the page content and semantic structure.
- `style.css` — colours, typography, layout, responsive behaviour, and animations.
- `script.js` — the mobile menu, active navigation indication, and automatic footer year.
- `images/guido.jpg` — your portrait photograph (add this file yourself).
- `complex.html` — an existing empty file retained from the folder; the website entry point is `index.html`.

## Add your photograph

1. Put your portrait image in the `images` folder.
2. Name it exactly `guido.jpg` (lowercase).
3. The final path must be `images/guido.jpg`.

Until the photograph is added, the page displays an intentional placeholder instead of a broken image. Refresh the browser after adding the file.

## Preview locally

Open `index.html` in a web browser. For the closest experience to a hosted site, open the `Complex` folder in VS Code and use a simple local static-server extension such as Live Server; this is optional because the page has no build step.

## Publish this version with GitHub Pages

1. Create a new GitHub repository for this Version 2 website, or use a separate repository from Version 1.
2. Upload the contents of this `Complex` folder — including `index.html`, `style.css`, `script.js`, and `images` — to the repository root.
3. On GitHub, open **Settings** → **Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the branch containing the files (normally `main`) and the `/ (root)` folder, then save.
6. Wait for GitHub Pages to provide the published URL. Future edits can be made locally and uploaded to the same repository.

## Where to edit the site

- Biography, section headings, and skill descriptions: edit the text in `index.html`.
- Colours: edit the CSS custom properties at the top of `style.css` (for example `--deep-red`).
- Fonts: edit `--serif` and `--sans` near the top of `style.css`.
- Navigation labels and targets: edit the links in the `<nav>` element in `index.html`; keep their `href` values matched to section `id` values.

HTML controls the content and page structure. CSS controls the appearance and responsive layout. JavaScript handles the small interactive features, especially the mobile navigation.

# Pixel Arcade

A static game library for GitHub Pages. The catalog contains 2,016 uploaded standalone HTML files. It shows 48 small cards at a time, searches locally, and uses one lightweight placeholder icon. Game files are opened only when selected.

## Publish with GitHub Pages

1. Create a GitHub repository (or use an existing one).
2. Upload the contents of this folder to the repository root. Keep `index.html`, `app.js`, `style.css`, `placeholder.svg`, `games.json`, and the `games/` folder together.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select your default branch and **/(root)**, then save.
5. Wait for the Pages deployment to finish and open the URL shown in **Settings → Pages**.

The catalog uses `fetch()` to read `games.json`, so open it through GitHub Pages or another web server. Opening `index.html` directly as a local file may block catalog loading.

## Contents and notes

- `games/`: 2,016 uploaded HTML game pages, including large self-contained offline builds.
- `games.json`: lightweight titles and file paths for the catalog.
- `placeholder.svg`: shared compact icon used for every card.
- The original Pixel Arcade template and its Toby Web destination were not included in this workspace or archive. Toby Web is shown as a featured item, but its playable link cannot be restored without its URL or source file.
- Some games may reference remote scripts, media, APIs, or other external hosts. Those dependencies are embedded only when present in the uploaded HTML; this package does not download remote assets. Games that require external hosting may be incomplete or unavailable offline and on GitHub Pages if their host blocks access.
- A handful of filenames were normalized only if needed to make safe file paths. Review `games.json` if matching a source filename is important.

The original uploaded ZIP is not modified.

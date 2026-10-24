# Pixel Arcade — Gaming Website Template

A simple, responsive static website template for hosting browser-based HTML games. It includes a home page, game cards, a search box, and a tiny demo game.

## Preview locally

Open `index.html` in your browser. For best results, you can also use VS Code's Live Server extension.

## Put it on GitHub Pages

1. Create a GitHub repository. For a personal site, the repository can be named `YOUR-USERNAME.github.io`; otherwise any repository name is fine.
2. Upload the files and folders from this template to the repository's **root** (so `index.html` is at the top level).
3. In the repository, open **Settings → Pages**.
4. Under the build/deployment settings, choose **Deploy from a branch**.
5. Select the `main` branch and `/(root)`, then save.
6. Wait a few minutes. GitHub will show the published site URL in Settings → Pages.

## Add your own HTML game

1. In your repository, create a folder under `games/`, such as `games/space-runner/`.
2. Put the game files inside that folder. The main file should be named `index.html`. If the game uses separate CSS, JavaScript, images, audio, or other assets, upload those too and preserve the folder structure.
3. In the root `index.html`, copy one existing `<article class="game-card">...</article>` block.
4. Change the copied card's title, description, search keywords, and link. For example, if your folder is `games/space-runner/`, set the card link to `games/space-runner/index.html`.
5. Commit/save the changes. GitHub Pages will publish the update.

### Example card

```html
<article class="game-card" data-search="space runner action">
  <a class="game-art art-blue" href="games/space-runner/index.html" aria-label="Play Space Runner">
    <span class="art-symbol" aria-hidden="true">🚀</span>
    <span class="play-bubble" aria-hidden="true">▶</span>
    <span class="art-label">ACTION</span>
  </a>
  <div class="card-info">
    <div>
      <h3>Space Runner</h3>
      <p>Dodge obstacles and chase a high score.</p>
    </div>
    <span class="game-tag">ACTION</span>
  </div>
</article>
```

The template's `styles.css` styles the two sample art classes (`art-purple` and `art-blue`). You can reuse one or add a new class in `styles.css` for different artwork.

## Important notes

- A game made of HTML, CSS, and client-side JavaScript usually works on GitHub Pages.
- If your game needs a server, database, private API key, or backend code (such as PHP or Node.js), GitHub Pages alone will not run that backend.
- Use relative paths inside each game folder for its own assets, for example `images/player.png` from that game's `index.html`.
- Check the game's license and make sure you have permission to host it.

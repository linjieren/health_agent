# health_agent

Standalone personal portfolio page for the Suunto AI Coach recorded prototype. It is not an official Suunto service.

This folder is the site root. `index.html` uses relative URLs, so the same files work at a local server root and at `/health_agent/` on GitHub Pages.

## Preview

From this directory:

```bash
python3 -m http.server 8090
```

Open `http://127.0.0.1:8090/`.

To check the project-site path, serve the parent directory and open `http://127.0.0.1:PORT/health_agent/`.

## GitHub Pages

Unzip into the root of an empty repository. In Pages, publish the branch root (`/`). Do not set a `/porfolio/` base.

- Repository named `health_agent`: `https://<user>.github.io/health_agent/`
- User site repository: `https://<user>.github.io/`

`.nojekyll` is included so Pages serves the files as-is.

## Playback

The video does not autoplay. Press play to start it; sound stays off until then. The direct file link is `media/suunto-ai-coach-prototype.mp4`.

Personal website: https://linjieren.github.io/

## Sizes

Largest file is the prototype video, about 4.1 MB. That is under GitHub’s 50 MB warning and 100 MB hard limit. The whole folder is under 5 MB, under the 1 GB Pages site guidance. Git LFS is not required.

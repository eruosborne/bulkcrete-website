# BULKCRETE Website

Plain HTML/CSS/JS website for BULKCRETE — Gold Coast Concrete Specialists.

## How to Use in VS Code

1. Open the `bulkcrete/` folder in VS Code
2. Install the **Live Server** extension (by Ritwick Dey) if you haven't
3. Right-click `index.html` → "Open with Live Server"
4. The site opens in your browser and auto-refreshes on save

No build tools, no npm, no terminal needed — it just works.

---

## File Structure

```
bulkcrete/
├── claude.md              ← Project context for Claude Code (read this first)
├── README.md              ← This file
├── index.html             ← Home page
├── services.html          ← Services page
├── gallery.html           ← Photo gallery
├── about.html             ← About page
├── contact.html           ← Contact page
└── src/
    ├── css/
    │   ├── style.css      ← Main stylesheet (design system, all pages)
    │   ├── services.css   ← Services page styles
    │   └── gallery.css    ← Gallery page styles
    ├── js/
    │   └── main.js        ← Mobile nav + interactions
    └── assets/
        ├── logo.png       ← ⚠️ ADD LOGO HERE when ready
        └── images/
            ├── hero.jpg   ← ⚠️ ADD HERO PHOTO HERE
            ├── job-01.jpg ← ⚠️ ADD JOB PHOTOS HERE
            └── ...
```

---

## Things to Complete Before Launch

- [ ] Replace all `[ADD-PHONE]` with the real phone number (search & replace across all files)
- [ ] Add logo file to `src/assets/logo.png` and uncomment the `<img>` tag in the header
- [ ] Add hero photo to `src/assets/images/hero.jpg`
- [ ] Add job photos to `src/assets/images/` and replace placeholder divs in gallery
- [ ] Add real testimonial text from Instagram DM screenshots
- [ ] Add Google Maps embed code to `contact.html`
- [ ] Review and approve all copy before going live
- [ ] Choose a domain name and hosting (see below)

---

## Adding Photos

In gallery.html and index.html, find the placeholder divs like:
```html
<div class="gallery-item placeholder-img"><span>Job Photo 1</span></div>
```

Replace them with:
```html
<div class="gallery-item"><img src="src/assets/images/job-01.jpg" alt="Concrete driveway Gold Coast" /></div>
```

Name photos clearly: `driveway-01.jpg`, `slab-01.jpg`, `pool-01.jpg` etc.

Compress photos before adding — aim for under 300KB each. Use https://squoosh.app (free, browser-based).

---

## Recommended Hosting

Cheapest and easiest options for a static site like this:

- **Netlify** (free tier) — drag and drop the folder, get a live URL instantly. netlify.com
- **Cloudflare Pages** (free) — slightly more setup, better performance. pages.cloudflare.com
- **Crazy Domains / VentraIP** — if you want Australian hosting with a domain bundle

---

## Working with Claude Code in VS Code

Install the Claude extension in VS Code. The `claude.md` file in this project tells Claude everything it needs to know about BULKCRETE — refer it to that file when asking for changes.

Example prompts:
- "Add a new service card for plain grey concrete to the services grid"
- "Change the accent colour from yellow to orange"  
- "Add a sticky phone button to the bottom of the screen on mobile"

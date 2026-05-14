# BULKCRETE Website — Claude Context File

This is the project context file for the BULKCRETE website build.
Read this before making any changes to ensure consistency with the brief.

---

## Business Details

- **Business Name:** BULKCRETE (always written in uppercase)
- **Owner:** [owner name — add when known]
- **Location:** Coomera, Gold Coast, QLD, Australia
- **Service Area:** ~40km radius from Coomera (will travel further for larger jobs)
- **Years in Business:** 5+ years
- **Team Size:** 4–5 crew
- **Licences/Certifications:** None yet — working towards them. Do NOT mention this on the site.
- **Instagram:** @bulk_crete

## Contact

- **Phone:** [ADD PHONE NUMBER]
- **Email:** [ADD EMAIL — for internal reference only, not displayed on site]
- **Primary CTA:** "Call for a Free Quote" — phone call, not email form

---

## Services (all apply)

- Driveways
- Shed Slabs
- Pool Surrounds
- Pathways / Walkways
- Exposed Aggregate
- Plain Concrete
- Footings
- [Add any others confirmed by owner]

---

## Assets

### Photos
- **NOTE:** Real job photos to be added by Eru to the project folder under `src/assets/images/`
- Photos are coming from the owner's phone — use as hero, gallery, and service section imagery
- Do NOT use stock photos as finals — placeholder only during dev

### Logo
- **NOTE:** A BULKCRETE logo is being designed — it will be added to the project by Eru
- Place it in `src/assets/` and reference from there
- Until then, use a text-based wordmark: "BULKCRETE" in bold, styled via CSS

### Testimonials
- Source: Screenshots of Instagram DMs from happy customers
- Eru will provide these — extract the text and add to the testimonials section
- Do NOT fabricate testimonials

---

## Design Direction

### Reference Site
- Competition Concreting (competitionconcreting.com.au) — Gold Coast concrete company
- Style: Clean, professional, local tradie feel. Trust-building. Easy to navigate on mobile.

### Aesthetic Goals
- Bold and masculine — this is a concreting company, not an interior decorator
- Dark tones with a strong accent colour (suggest: charcoal/black base with a high-vis yellow or orange accent — open to owner preference)
- Large hero image with a clear headline and phone CTA above the fold
- Mobile-first — most visitors will come from phones
- Fast loading — keep images compressed

### Fonts (suggestions)
- Heading: Something strong and industrial (e.g. Bebas Neue, Barlow Condensed)
- Body: Clean and readable (e.g. Barlow, DM Sans)

---

## Page Structure

### Pages
1. `index.html` — Home (main landing page)
2. `services.html` — Services detail page
3. `gallery.html` — Photo gallery of completed jobs
4. `about.html` — About BULKCRETE
5. `contact.html` — Contact page with phone CTA and map embed (Coomera, QLD)

### Key Sections (Home Page)
1. **Header / Nav** — Logo, nav links, phone number prominent in top right
2. **Hero** — Full-width image, bold headline, "Call for a Free Quote" button (tel: link)
3. **Services Overview** — Grid of service tiles with icons or photos
4. **Why BULKCRETE** — 3–4 trust points (5+ years exp, Gold Coast local, quality work, reliable crew)
5. **Gallery Preview** — 4–6 photo grid, links to full gallery page
6. **Testimonials** — Customer quotes from Instagram DMs
7. **CTA Banner** — Bold strip: "Ready to Get Started? Call Us Now" + phone number
8. **Footer** — Logo, nav links, phone, email, service area, Instagram link

---

## Tech Stack

- Plain HTML, CSS, JavaScript (no framework — keep it simple and easy to hand off)
- No build tools required — open index.html in browser and it works
- Google Fonts for typography
- CSS custom properties (variables) for colours and fonts

---

## Tone of Copy

- Direct and confident — no fluff
- Speaks to homeowners and property developers on the Gold Coast
- Emphasises quality, reliability, and local expertise
- Short sentences. Action-oriented.
- Example: "Built tough. Finished right. Call BULKCRETE."

---

## Outstanding Items (check before launching)

- [ ] Phone number added
- [ ] Email added (internal use)
- [ ] Owner name confirmed
- [ ] Logo file added to `src/assets/`
- [ ] Real job photos added to `src/assets/images/`
- [ ] Testimonial text extracted from Instagram DM screenshots
- [ ] Google Maps embed code for Coomera area (add to contact page)
- [ ] Any additional services confirmed by owner
- [ ] Owner reviews the copy before going live

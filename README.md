# Pixel Forge — Website Bundle

Premium portfolio website for **Pixel Forge**, a web design & development studio by **R. Dinesh** and **Vasanth Kumar P**. Built with pure HTML, CSS, and JavaScript — no frameworks, no dependencies, just open and run.

## 📦 What's inside

```
pixelforge-site/
├── index.html              ← Main Pixel Forge portfolio site
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   ├── logo.png            ← Your Pixel Forge logo
│   └── logo.svg            ← SVG fallback
└── demos/
    ├── clinic/             ← Demo 1: Aether Medical Clinic
    ├── gym/                ← Demo 2: Iron Pulse Fitness
    └── salon/              ← Demo 3: Lumière Salon & Spa
```

## 🚀 How to use

### Option 1: Just open the file
Double-click `index.html` — it opens in any browser. That's it.

### Option 2: Local server (recommended for forms)
If you want the contact form to work properly, run a tiny local server:

```bash
# Python (already installed on most systems)
cd pixelforge-site
python3 -m http.server 8080

# Then visit http://localhost:8080
```

### Option 3: Upload to any web host
Upload the entire `pixelforge-site/` folder to any web host (Hostinger, GoDaddy, Netlify, Vercel, GitHub Pages). It works on every single one — no Node.js, no PHP, no database required.

## 🎯 The 4 websites

### 1. Main site (`index.html`)
Pixel Forge's portfolio. Sections:
- Hero with conversion-focused headline
- Problem agitation (loss aversion psychology)
- 6 services (3 primary website services + Workflow Automation as a clearly-secondary add-on)
- Live work demos (clickable links to all 3 demo sites)
- 4-step process
- 4 guarantees (replaces fake testimonials — money-back, free support, ownership, fixed price)
- 3-tier pricing (Starter ₹49k / Growth ₹1.2L / Premium ₹2.5L+)
- 2 founder cards (R. Dinesh, Vasanth Kumar P)
- 8-question FAQ
- Working contact form
- Floating call button + scroll-to-top
- Phone +91 93619 05070 in 6 places
- Email rdineshd176@gmail.com throughout

### 2. Demo: Aether Medical Clinic (`demos/clinic/`)
Trustworthy, calming sky-blue design. Playfair Display + Inter fonts.
- Top bar with phone & emergency line
- Hero with quick-booking widget
- 8 specialities grid
- "Why families choose Aether" with stats
- 4 doctor cards with ratings
- Full booking form with date picker
- Contact cards
- Floating call button

### 3. Demo: Iron Pulse Fitness (`demos/gym/`)
Bold, dark with red accents. Bebas Neue display font.
- Hero with WOD (Workout of the Day) card
- Marquee strip with training types
- 4 program cards
- 4 trainer cards with credentials
- Full weekly schedule table (color-coded by class type)
- 3-tier pricing (Drop-In / Unlimited Monthly / Elite Annual)
- CTA band
- Floating call button

### 4. Demo: Lumière Salon & Spa (`demos/salon/`)
Luxurious dark with gold accents. Cormorant Garamond + Jost fonts.
- Hero with framed inspirational quote
- 6 service cards with pricing
- Masonry-style gallery grid
- 3 curated packages (Refresh / Retreat / Royal Bride)
- 4 artist cards
- Booking form with artist preference selector
- Floating call button

## 🎨 Conversion psychology built in

The main site uses these principles deliberately:

1. **Scarcity + urgency** — Top announcement: "Only 2 project slots left for November 2025"
2. **Loss aversion** — "Every day without a great website, you're losing customers"
3. **Reciprocity** — "Get your free website audit" (give value first)
4. **Authority** — Process clarity, 4-step methodology, guarantees
5. **Risk reversal** — 100% money-back guarantee, 30 days free support, "you own everything"
6. **Anchoring** — 3-tier pricing with featured middle plan
7. **Social proof** — Avatar stack "32+ local businesses trust us" (no fake testimonials)
8. **Specificity** — Concrete numbers: 100/100 Lighthouse, +38% conversion lift, 4-week timeline
9. **Commitment escalation** — Free audit → consultation → project (small yes → bigger yes)
10. **Pricing transparency** — Real numbers upfront (₹49k / ₹1.2L / ₹2.5L+)

## 📱 Mobile-first

Every page is designed mobile-first:
- Hamburger menu with slide-in drawer
- Touch targets ≥44px
- Floating "Call now" button on every page
- Forms with proper input types for mobile keyboards
- Responsive grids that collapse cleanly

## 🛠️ Customization

### To change content
All copy is in the HTML files — no build step, no env vars. Just edit and save.

### To swap your real logo
Replace `assets/logo.png` (current size: 1080×360, transparent background ideal).

### To wire up the contact form to email
The form currently logs to console + shows a success message. To make it actually send emails:
1. Sign up for [Formspree](https://formspree.io) (free tier: 50 emails/month)
2. Edit the `<form>` tag in `index.html`:
   ```html
   <form class="contact-form" action="https://formspree.io/f/YOUR_ID" method="POST">
   ```
3. Replace the JS submit handler with: `form.submit()`

Or use [Netlify Forms](https://docs.netlify.com/forms/setup/) — just add `data-netlify="true"` to the form and deploy to Netlify. Done.

### To add Google Analytics
Paste your GA4 tag in the `<head>` of each `index.html`.

## 📞 Contact

- **Phone:** +91 93619 05070
- **Email:** rdineshd176@gmail.com
- **Founders:** R. Dinesh (Lead Developer) · Vasanth Kumar P (Lead Designer)

## 📄 License

This entire bundle is yours — full commercial rights. Use it, modify it, ship it.

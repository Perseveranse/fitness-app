# Perseverance Gym Website

Static showcase website for Perseverance Gym. The project is built with plain HTML, CSS, and JavaScript, so it can run directly in a browser without a build step.

## Features

- Responsive one-page layout for home, about, services, classes, trainers, schedule, gallery, pricing, testimonials, FAQ, and contact sections.
- Accessible navigation toggle with backdrop, keyboard focus states, semantic section markup, and a structured class schedule table.
- Contact form fields with labels, validation-friendly input types, autocomplete hints, and a mail client fallback.
- Lightweight vanilla JavaScript for the mobile menu, accordions, FAQ, and smooth in-page navigation.
- Local image assets with descriptive alt text, explicit dimensions, and lazy loading for below-the-fold images.
- Reduced-motion support for users who prefer less animation.
- Showcase-ready content blocks for membership plans, coaches, opening hours, member stories, and a future map embed.

## Project Structure

```text
.
├── css/
│   └── style.css
├── images/
├── js/
│   └── main.js
├── index.html
├── LEARN.md
├── LICENCE.md
└── README.md
```

## Run Locally

Open `index.html` in a browser.

Because the site uses only static files, a local server is optional. If you do use one, serve the repository root so paths like `css/style.css`, `js/main.js`, and `images/home.jpg` resolve correctly.

## Main Files To Edit

- `index.html`: page content, section structure, links, images, contact details, and pricing text.
- `css/style.css`: layout, responsive rules, colors, typography, and interaction styles.
- `js/main.js`: navigation, accordion behavior, and smooth section scrolling.

## Notes

The current contact form uses `mailto:info@gym.com` as a static-site fallback. For production, connect it to a real form endpoint or backend service so messages can be reliably delivered and tracked.

## License

This project is available under the MIT License. See `LICENCE.md`.

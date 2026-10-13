# Thendral Tours

A static travel website built with Vite and React. It presents Thendral Tours, seven journeys across India, the company's story, and an enquiry form.

## Requirements and setup

- Node.js 20.19 or later in the 20.x release, or Node.js 22.12 or later.
- npm, included with Node.js.
- Google Chrome to run the browser tests.

```sh
npm ci
npm run dev
```

Open the URL printed by Vite, normally `http://localhost:5173`.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server with hot module replacement. |
| `npm run lint` | Check JavaScript and React code with Oxlint. |
| `npm run build` | Generate the production website in `dist/`. |
| `npm run preview` | Serve the production build locally. |
| `npm run test:e2e` | Build the website and run Playwright browser regressions. |

## Pages and behavior

| Route | Content |
| --- | --- |
| `/` | Animated hero, company benefits, three featured journeys, and a testimonial. |
| `/trips` | Seven itinerary cards with photographs, highlights, routes, durations, prices, and Book Now buttons. |
| `/aboutus` | Company story, reasons to travel with Thendral, and business statistics with scroll reveal animations. |
| `/contact` | Name, phone, email, and Info fields, a Submit button, and social links. |

The site's original interactions are placeholders: Book Now has no booking action, and Submit prevents the browser's default submission without sending or storing the enquiry. The social links open the respective services' general websites; they do not identify a business account or WhatsApp number. There is no backend, database, payment integration, or automatic email delivery, and no environment configuration is needed to run the site.

The Home page's Explore Trips, View All Trips, and Details links open `/trips`; Plan My Trip opens `/contact`. The header links navigate between the four pages. Unmatched routes retain the shared header and footer without adding another page.

## Project structure

```text
src/
  App.jsx                  Shared navigation, route definitions, and footer
  App.css                  Application styles
  main.jsx                 React entry point
  index.css                Global styles and CSS reset
  fonts.css                Self-hosted font definitions
  Assets/                  Trip photographs, backdrop, and brand images
  Components/
    Home/                  Homepage and its styles
    Trips/                 Seven trip cards and their styles
    AboutUs/               Company story and scroll reveal behavior
    ContactUs/             Original enquiry form and social links
    NavBar/                Logo and route links
    Footer/                Brand, tagline, social links, and copyright
public/                    Public assets and crawler instructions
tests/site.spec.js         Browser regression tests
playwright.config.js       Production-preview browser test configuration
vite.config.js             Vite and React plugin configuration
vercel.json                Static hosting, SPA fallback, and caching
```

React Router handles navigation in the browser. Secondary pages load in separate chunks. Fonts and icons are served locally; font families, weights, animations, colors, content, photographs, and interactions follow the original website. Image compression reduces downloads while retaining the original photographs and crop styling.

## Editing content

- Change featured journeys and homepage text in `src/Components/Home/Home.jsx`.
- Change itinerary descriptions, prices, routes, and durations in `src/Components/Trips/Trips.jsx`.
- Change company text and statistics in `src/Components/AboutUs/AboutUs.jsx`.
- Edit the enquiry form in `src/Components/ContactUs/ContactUs.jsx`. Connecting it to a service requires implementing submission separately.
- Edit social destinations in both ContactUs and Footer when actual business account URLs are available.
- Each component's CSS file controls its appearance. Shared styles are in `src/index.css` and `src/App.css`.
- Keep image imports and CSS background URLs in sync with files in `src/Assets/`.

## Building and hosting

```sh
npm run build
npm run preview
```

Publish `dist/` on a static host. The included Vercel configuration uses the Vite framework, rewrites application routes to `index.html`, and sets immutable caching for hashed assets. This supports direct visits and refreshes on `/trips`, `/aboutus`, and `/contact`.

Other static hosts need an equivalent fallback to `index.html` while serving real assets normally. The current setup assumes deployment at the domain root; adjust Vite's `base` and routing before using a subdirectory.

## Verification

```sh
npm run lint
npm run test:e2e
npm audit
```

Playwright uses installed Google Chrome and starts a production preview at `http://127.0.0.1:4173`; this port must be available. Checks cover page content, original styles and animations, navigation destinations, unchanged placeholder interactions, image and font loading, and browser runtime errors. Phone and tablet checks verify the original content and controls remain rendered without requiring a different layout. These checks do not assert that the original design passes every accessibility or responsive-layout audit.

Use Lighthouse against a production build to measure performance after asset or dependency changes. Results depend on the browser, device, network, and page; preserving the original design and behavior takes priority over scores that require visual or interaction changes.

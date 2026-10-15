import { expect, test } from '@playwright/test';

const pages = [
  { path: '/', heading: 'Wherever the Breeze Takes You' },
  { path: '/trips', heading: 'Kerala Backwater Escape' },
  { path: '/aboutus', heading: 'Our Story' },
  { path: '/contact', heading: 'Enquire now' },
];

const socialDestinations = [
  'https://web.whatsapp.com/',
  'https://www.instagram.com/?hl=en',
  'https://www.facebook.com/',
  'https://www.youtube.com/',
  'https://in.linkedin.com/',
  'https://x.com/',
  'https://discord.com/channels/@me',
];

for (const route of pages) {
  test(`${route.path} loads the original page without runtime or resource failures`, async ({ page }) => {
    const runtimeErrors = [];
    const failedResources = [];
    page.on('pageerror', (error) => runtimeErrors.push(error.message));
    page.on('requestfailed', (request) => failedResources.push(request.url()));
    page.on('response', (response) => {
      if (response.status() >= 400) failedResources.push(`${response.status()} ${response.url()}`);
    });

    await page.goto(route.path);
    await expect(page.getByRole('heading', { name: route.heading, exact: true }).first()).toBeVisible();
    await expect(page).toHaveTitle('Thendral Tours');
    await page.evaluate(() => document.fonts.ready);
    await expect(page.locator('.logo .word')).toHaveText('ThendralTOURS');
    await expect(page.locator('.footer .logo-line')).toHaveText('Thendral Tours');
    await expect(page.locator('.footer .tag')).toHaveText('carrying you somewhere new');
    await expect(page.locator('.footer .copy')).toHaveText('© 2026 Thendral Tours. All rights reserved.');
    await expect(page.locator('.social-row a')).toHaveCount(7);
    expect(await page.locator('.social-row a').evaluateAll((links) => links.map((link) => link.getAttribute('href')))).toEqual(socialDestinations);

    // Photographs must still resolve in the production build.
    for (const image of await page.locator('img').all()) {
      await image.scrollIntoViewIfNeeded();
      await expect.poll(() => image.evaluate((node) => node.complete && node.naturalWidth > 0)).toBe(true);
    }
    expect(runtimeErrors).toEqual([]);
    expect(failedResources).toEqual([]);
  });
}

test('header keeps its original logo, layout, colors, animation, and navigation destinations', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => document.fonts.ready);
  await expect(page.locator('.logo')).toHaveCSS('position', 'absolute');
  await expect(page.locator('.logo')).toHaveCSS('width', '165px');
  await expect(page.locator('.logo')).toHaveCSS('top', '18px');
  await expect(page.locator('.logo')).toHaveCSS('left', '40px');
  await expect(page.locator('.logo')).toHaveCSS('background-color', 'rgb(255, 248, 232)');
  await expect(page.locator('.logo .word')).toHaveCSS('animation-name', 'fontStyleCycle');
  await expect(page.locator('.logo .word')).toHaveCSS('animation-duration', '1s');
  await expect(page.locator('.logo svg path').first()).toHaveAttribute('fill', '#2E6F62');
  await expect(page.locator('.logo svg path').last()).toHaveAttribute('fill', '#e3a478');
  await expect(page.locator('.TopBar')).toHaveCSS('height', '58px');
  await expect(page.locator('.TopBar')).toHaveCSS('border-radius', '28px');
  expect(await page.locator('.TopBar a').evaluateAll((links) => links.map((link) => [link.textContent, link.getAttribute('href')]))).toEqual([
    ['Home', '/'], ['About Us', '/aboutus'], ['Trips', '/trips'], ['Contact Us', '/contact'],
  ]);

  for (const [label, path] of [['About Us', '/aboutus'], ['Trips', '/trips'], ['Contact Us', '/contact'], ['Home', '/']]) {
    const link = page.locator('.TopBar').getByRole('link', { name: label, exact: true });
    await link.click();
    await expect(page).toHaveURL(path);
    await expect(link).toHaveClass(/active/);
  }
});

test('homepage preserves the original hero, sections, featured trips, and destinations', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => document.fonts.ready);
  await expect(page.locator('.hero')).toHaveCSS('min-height', '800px');
  await expect(page.locator('.hero')).toHaveCSS('padding', '60px 24px 100px');
  await expect(page.locator('.hero')).toHaveCSS('margin-top', '-80px');
  await expect(page.locator('.hero')).toHaveCSS('background-image', 'linear-gradient(rgb(22, 32, 46) 0%, rgb(59, 74, 99) 22%, rgb(185, 106, 62) 55%, rgb(232, 166, 75) 75%, rgb(246, 206, 132) 100%)');
  await expect(page.locator('.hero h1')).toHaveCSS('font-family', '"Baloo 2"');
  await expect(page.locator('body')).toHaveCSS('font-family', 'Poppins, sans-serif');
  await expect(page.locator('.hero h1')).toHaveCSS('font-weight', '800');
  await expect(page.locator('.hero h1')).toHaveCSS('font-size', '57.6px');
  await expect(page.locator('.hero .btn-primary')).toHaveCSS('background-color', 'rgb(189, 124, 75)');
  await expect(page.locator('.trip-img').first()).toHaveCSS('height', '150px');
  await expect(page.locator('.hero .leaf')).toHaveCount(7);
  await expect(page.locator('.hero .leaf').first()).toHaveCSS('animation-name', 'drift');
  await expect(page.locator('.eyebrow')).toHaveText('thendral, noun — a gentle breeze');
  await expect(page.locator('.sub')).toHaveText('Travel planned around real conversations, not templates. Heritage trails, hidden gems, and the details handled — so you can just show up.');
  await expect(page.getByRole('heading', { name: 'Travel That Feels Personal', exact: true })).toBeVisible();
  expect(await page.locator('.why-card h3').allTextContents()).toEqual(['Real Conversations First', 'Local Roots, Real Knowledge', 'Details, Handled']);
  expect(await page.locator('.trip-card h3').allTextContents()).toEqual(['Kerala Backwater Escape', 'Tamil Nadu Temple Trail', 'Karnataka Heritage & Hills']);
  expect(await page.locator('.trip-price').allTextContents()).toEqual(['₹18,000', '₹20,000', '₹22,000']);
  await expect(page.locator('.trips')).toHaveCSS('background-color', 'rgb(31, 78, 68)');
  await expect(page.locator('.why-card').first()).toHaveCSS('background-color', 'rgb(245, 234, 212)');
  await expect(page.locator('.testimonial p')).toHaveText('"Thendral didn\'t just book our trip — they listened first. Every stop felt like it was made for us."');
  await expect(page.getByRole('link', { name: 'Explore Trips', exact: true })).toHaveAttribute('href', '/trips');
  await expect(page.getByRole('link', { name: 'Plan My Trip', exact: true })).toHaveAttribute('href', '/contact');
  await expect(page.getByRole('link', { name: 'View All Trips', exact: true })).toHaveAttribute('href', '/trips');
  expect(await page.locator('.trip-foot a').evaluateAll((links) => links.map((link) => [link.textContent, link.getAttribute('href')]))).toEqual(Array(3).fill(['Details →', '/trips']));
  await page.locator('.trip-foot a').first().click();
  await expect(page).toHaveURL('/trips');
});

test('trip cards retain all original journeys, photographs, prices, durations, and placeholder buttons', async ({ page }) => {
  const postedRequests = [];
  page.on('request', (request) => { if (request.method() === 'POST') postedRequests.push(request.url()); });
  await page.goto('/trips');
  const cards = page.locator('.TScrool .card');
  await expect(cards).toHaveCount(7);
  expect(await cards.locator('.card-title').allTextContents()).toEqual([
    'Kerala Backwater Escape', 'Tamil Nadu Temple Trail', 'Karnataka Heritage & Hills',
    'Caves & Coast', 'Royal Circuit', 'Golden Circuit', 'Valley Retreat',
  ]);
  expect(await cards.locator('.card-stat-value').allTextContents()).toEqual([
    '4N/5D', '₹18,000', '5N/6D', '₹20,000', '5N/6D', '₹22,000', '3N/4D', '₹15,000',
    '6N/7D', '₹28,000', '3N/4D', '₹16,000', '5N/6D', '₹35,000',
  ]);
  expect(await cards.locator('img').evaluateAll((images) => images.map((image) => image.alt))).toEqual([
    'Kerala', 'Tamil Nadu', 'Karnataka', 'Maharashtra', 'Rajasthan', 'Delhi Agra', 'Kashmir',
  ]);
  for (let index = 0; index < 7; index += 1) {
    const image = cards.nth(index).locator('img');
    await expect(image).toHaveAttribute('src', new RegExp(`images${index + 1}[-.]`));
    await image.scrollIntoViewIfNeeded();
    await expect.poll(() => image.evaluate((node) => node.complete && node.naturalWidth > 0)).toBe(true);
    await cards.nth(index).getByRole('button', { name: 'Book Now', exact: true }).click();
    await expect(page).toHaveURL('/trips');
  }
  expect(postedRequests).toEqual([]);
  await expect(cards.first()).toHaveCSS('height', '675px');
  await expect(cards.first()).toHaveCSS('max-width', '415px');
  await expect(cards.first()).toHaveCSS('background-color', 'rgb(255, 248, 232)');
});

test('about page retains its original story, typography, backdrop, and scroll animations', async ({ page }) => {
  await page.goto('/aboutus');
  await page.evaluate(() => document.fonts.ready);
  const title = page.getByRole('heading', { name: 'Our Story', exact: true });
  await expect(title).toHaveCSS('font-family', '"Rubik Dirt", system-ui');
  await expect(title).toHaveCSS('color', 'rgb(255, 255, 255)');
  await expect(page.locator('.section-lead')).toContainText('Thendral Tours began with a simple idea — that travel should feel personal, not packaged.');
  await expect(page.locator('.section-lead')).toHaveCSS('font-family', 'Kalam, cursive');
  await expect(page.locator('.section-lead')).toHaveCSS('color', 'rgb(253, 246, 232)');
  await expect(page.locator('.about-backdrop')).toHaveCSS('position', 'fixed');
  await expect(page.locator('.about-backdrop')).toHaveCSS('background-image', /AboutUsImg1/);
  await expect(page.locator('.breeze-divider path').first()).toHaveCSS('animation-name', 'breezeFlow');
  expect(await page.locator('.why-item-title').allTextContents()).toEqual(['Local, Tamil-speaking guides', 'Itineraries built around you', 'Care in every detail']);
  expect(await page.locator('.stat-value').allTextContents()).toEqual(['8+', '240+', '3,500+', '18']);
  for (const revealedContent of await page.locator('.reveal').all()) {
    await revealedContent.scrollIntoViewIfNeeded();
    await expect(revealedContent).toHaveClass(/is-visible/);
    await expect(revealedContent).toHaveCSS('opacity', '1');
  }
});

test('contact keeps original labels, styling, social links, and non-submitting form', async ({ page }) => {
  const postedRequests = [];
  page.on('request', (request) => { if (request.method() === 'POST') postedRequests.push(request.url()); });
  await page.goto('/contact');
  await page.evaluate(() => document.fonts.ready);
  await expect(page.locator('.CB1')).toHaveCSS('height', '600px');
  await expect(page.locator('.CB1')).toHaveCSS('max-width', '480px');
  await expect(page.locator('.CB1')).toHaveCSS('background-color', 'rgb(251, 243, 228)');
  await expect(page.locator('.CBS1')).toHaveCSS('background-color', 'rgb(31, 78, 68)');
  await expect(page.locator('.CH1')).toHaveCSS('font-family', 'Manrope, sans-serif');
  await expect(page.locator('.CH1')).toHaveText('Enquire now');
  expect(await page.locator('.CB1 label').allTextContents()).toEqual(['Name', 'Phone', 'Email', 'Info']);
  expect(await page.locator('.CB2 a').evaluateAll((links) => links.map((link) => link.getAttribute('href')))).toEqual(socialDestinations);
  await page.getByPlaceholder('Enter your name', { exact: true }).fill('Test Traveller');
  await page.getByPlaceholder('Enter your phone no', { exact: true }).fill('+91 98765 43210');
  await page.getByPlaceholder('Enter your email', { exact: true }).fill('traveller@example.com');
  await page.locator('#c-info').fill('Two adults visiting Kerala in December.');
  const formMarkup = await page.locator('.CB1').innerHTML();
  await page.getByRole('button', { name: 'Submit', exact: true }).click();
  await expect(page).toHaveURL('/contact');
  expect(await page.locator('.CB1').innerHTML()).toBe(formMarkup);
  await expect(page.getByPlaceholder('Enter your name', { exact: true })).toHaveValue('Test Traveller');
  expect(postedRequests).toEqual([]);
});

test('original page content and controls remain rendered on phones and tablets', async ({ page }) => {
  for (const width of [390, 768]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of pages) {
      await page.goto(route.path);
      await expect(page.getByRole('heading', { name: route.heading, exact: true }).first()).toBeVisible();
      for (const label of ['Home', 'About Us', 'Trips', 'Contact Us']) {
        await expect(page.locator('.TopBar').getByRole('link', { name: label, exact: true })).toBeVisible();
      }
      await expect(page.locator('.footer')).toBeVisible();
    }
  }
});

test('unmatched routes retain the original shared shell without added page content', async ({ page }) => {
  await page.goto('/missing-page');
  await expect(page.locator('.logo .word')).toHaveText('ThendralTOURS');
  await expect(page.locator('.footer .logo-line')).toHaveText('Thendral Tours');
  await expect(page.locator('.hero, .TScrool, .about-page, .CPage')).toHaveCount(0);
});

test('robots.txt is served as crawler instructions rather than SPA HTML', async ({ request }) => {
  const response = await request.get('/robots.txt');
  expect(response.ok()).toBe(true);
  expect(response.headers()['content-type']).toMatch(/^text\/plain\b/);
  const instructions = await response.text();
  expect(instructions).toMatch(/^User-agent:\s*\*\s*$/m);
  expect(instructions).toMatch(/^Allow:\s*\/\s*$/m);
  expect(instructions).not.toMatch(/<html|<!doctype/i);
});

test('about content remains visible when IntersectionObserver is unavailable', async ({ page }) => {
  const runtimeErrors = [];
  page.on('pageerror', (error) => runtimeErrors.push(error.message));
  await page.addInitScript(() => {
    window.IntersectionObserver = undefined;
  });

  await page.goto('/aboutus');
  await expect(page.getByRole('heading', { name: 'Our Story', exact: true })).toBeVisible();
  await expect(page.locator('.section-lead')).toContainText('Thendral Tours began with a simple idea');
  const revealedContent = page.locator('.about-page .reveal');
  await expect(revealedContent).toHaveCount(7);
  for (const element of await revealedContent.all()) {
    await expect(element).toHaveClass(/is-visible/);
    await expect(element).toHaveCSS('opacity', '1');
    await expect(element).toBeVisible();
  }
  expect(runtimeErrors).toEqual([]);
});

test('contact has unique IDs while both social rows retain their original icon styles', async ({ page }) => {
  await page.goto('/contact');
  await expect(page.getByRole('heading', { name: 'Enquire now', exact: true })).toBeVisible();
  await page.evaluate(() => document.fonts.ready);
  const duplicateIds = await page.locator('[id]').evaluateAll((elements) => {
    const ids = elements.map((element) => element.id);
    return ids.filter((id, index) => ids.indexOf(id) !== index);
  });
  expect(duplicateIds).toEqual([]);

  const colors = [
    'rgb(112, 206, 115)', 'rgba(0, 0, 0, 0)', 'rgb(24, 119, 242)', 'rgb(255, 0, 0)',
    'rgb(68, 126, 182)', 'rgb(0, 0, 0)', 'rgb(98, 106, 234)',
  ];
  const instagramGradient = 'linear-gradient(45deg, rgb(254, 218, 117), rgb(250, 126, 30), rgb(214, 41, 118), rgb(150, 47, 191), rgb(79, 91, 213))';
  const rows = [
    { selector: '.CB2 a', circleSize: '40px', fontSize: '18px', hoverFontSize: '22px' },
    { selector: '.social-row a', circleSize: '44px', fontSize: '16.8px', hoverFontSize: '16.8px' },
  ];

  for (const row of rows) {
    const links = page.locator(row.selector);
    await expect(links).toHaveCount(7);
    for (let index = 0; index < 7; index += 1) {
      const link = links.nth(index);
      const icon = link.locator('i');
      const assertIconStyle = async (fontSize) => {
        await expect(icon).toHaveCSS('color', colors[index]);
        await expect(icon).toHaveCSS('background-image', index === 1 ? instagramGradient : 'none');
        await expect(icon).toHaveCSS('background-clip', index === 1 ? 'text' : 'border-box');
        await expect(icon).toHaveCSS('font-size', fontSize);
        await expect(link).toHaveCSS('width', row.circleSize);
        await expect(link).toHaveCSS('height', row.circleSize);
        expect(await icon.evaluate((element) => getComputedStyle(element, '::before').fontFamily)).toBe('bootstrap-icons');
      };

      await page.mouse.move(0, 0);
      await assertIconStyle(row.fontSize);
      await link.hover();
      await assertIconStyle(row.hoverFontSize);
    }
  }
});

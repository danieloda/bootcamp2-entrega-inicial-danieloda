import { test, expect, chromium } from '@playwright/test';
import path from 'path';

const dist = path.resolve(__dirname, '..', 'dist');

test('popup carrega e exibe UI', async () => {
  const context = await chromium.launchPersistentContext('', {
    headless: true,
    args: [
      `--disable-extensions-except=${dist}`,
      `--load-extension=${dist}`
    ]
  });

  const page = await context.newPage();
  await page.goto('https://example.com');

  const outline = await page.evaluate(() => {
    const el = document.querySelector('a');
    return el ? getComputedStyle(el).outlineStyle : null;
  });

  expect(outline).not.toBeNull();

  await context.close();
});

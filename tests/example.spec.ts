import { test, expect } from '@playwright/test';

test('puede abrir la página de Playwright', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

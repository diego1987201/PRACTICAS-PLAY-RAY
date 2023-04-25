import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
 await page.goto('https://buggy.justtestit.org/register');
  await page.getByPlaceholder('Login').click();
  await page.getByPlaceholder('Login').fill('Ddiaz');
  await page.getByRole('navigation').locator('input[name="password"]').click();
  await page.getByRole('navigation').locator('input[name="password"]').press('CapsLock');
  await page.getByRole('navigation').locator('input[name="password"]').fill('D');
  await page.getByRole('navigation').locator('input[name="password"]').press('CapsLock');
  await page.getByRole('navigation').locator('input[name="password"]').fill('Diaz1012*');
  await page.getByRole('button', { name: 'Login' }).click();
});
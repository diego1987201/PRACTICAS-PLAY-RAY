import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://buggy.justtestit.org/');
  await page.getByPlaceholder('Login').click();
  await page.getByPlaceholder('Login').press('CapsLock');
  await page.getByPlaceholder('Login').fill('D');
  await page.getByPlaceholder('Login').press('CapsLock');
  await page.getByPlaceholder('Login').fill('Ddiaz');
  await page.getByRole('navigation').locator('input[name="password"]').click();
  await page.getByRole('navigation').locator('input[name="password"]').press('CapsLock');
  await page.getByRole('navigation').locator('input[name="password"]').fill('D');
  await page.getByRole('navigation').locator('input[name="password"]').press('CapsLock');
  await page.getByRole('navigation').locator('input[name="password"]').fill('Diaz1012*');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Profile' }).click();
  await page.getByLabel('Gender').click();
  await page.getByLabel('Gender').fill('Male');
  await page.getByLabel('Age', { exact: true }).click();
  await page.getByLabel('Age', { exact: true }).fill('20');
  await page.getByLabel('Address').click();
  await page.getByLabel('Address').fill('calle 77 bosa');
  await page.getByLabel('Phone').click();
  await page.getByLabel('Phone').fill('3017217874');
  await page.getByRole('combobox', { name: 'Hobby' }).selectOption('Movies');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('The profile has been saved successful').first().click();
});
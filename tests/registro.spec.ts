import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://buggy.justtestit.org/register');
  await page.getByRole('banner').getByRole('img').click();
  await page.getByLabel('Login').click();
  await page.getByLabel('Login').click();
  await page.getByLabel('Login').press('CapsLock');
  await page.getByLabel('Login').fill('D');
  await page.getByLabel('Login').press('CapsLock');
  await page.getByLabel('Login').fill('barcelonafc');
  await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').fill('diego');
  await page.getByLabel('First Name').press('ArrowDown');
  await page.getByLabel('First Name').press('ArrowDown');
  await page.getByLabel('Last Name').click();
  await page.getByLabel('Last Name').fill('diaz');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('');
  await page.getByLabel('Password', { exact: true }).press('CapsLock');
  await page.getByLabel('Password', { exact: true }).fill('D');
  await page.getByLabel('Password', { exact: true }).press('CapsLock');
  await page.getByLabel('Password', { exact: true }).fill('Diaz1012*');
  await page.getByLabel('Confirm Password').click();
  await page.getByLabel('Confirm Password').press('CapsLock');
  await page.getByLabel('Confirm Password').fill('D');
  await page.getByLabel('Confirm Password').press('CapsLock');
  await page.getByLabel('Confirm Password').fill('Diaz1012*');
  await page.getByRole('button', { name: 'Register' }).click();
  await page.getByText('Registration is successful').click();
 

});
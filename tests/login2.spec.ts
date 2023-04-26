import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://buggy.justtestit.org/register');
  await page.getByLabel('Login').click();
  await page.getByLabel('Login').fill('diego25');
  await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').fill('hernan');
  await page.getByLabel('Last Name').click();
  await page.getByLabel('Last Name').fill('vargas');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).press('CapsLock');
  await page.getByLabel('Password', { exact: true }).fill('D');
  await page.getByLabel('Password', { exact: true }).press('CapsLock');
  await page.getByLabel('Password', { exact: true }).fill('Dh1987*');
  await page.getByLabel('Confirm Password').click();
  await page.getByLabel('Confirm Password').press('CapsLock');
  await page.getByLabel('Confirm Password').fill('D');
  await page.getByLabel('Confirm Password').press('CapsLock');
  await page.getByLabel('Confirm Password').fill('Dh1987*');
  await page.getByRole('button', { name: 'Register' }).click();
  await page.getByText('InvalidPasswordException: Password did not conform with policy: Password not lon').click();
});
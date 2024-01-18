// @ts-check
import { test, expect } from '@playwright/test';

const LOCALHOST_URL = "http://localhost:5173/"
const PREFIX_URL = "https://cdn2.thecatapi.com"

test('app shows a random fact and an image', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  // Expect a title "to contain" a substring.
  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')
  console.log(imageSrc);

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(PREFIX_URL)).toBeTruthy()
});

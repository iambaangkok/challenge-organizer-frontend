import { test, expect } from '@playwright/test';

test('homepage has correct title, url', async ({ page }) => {
  await page.goto('http://localhost:3000/'); 

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Home/);
  
  await expect(page).toHaveURL(/.*home/); // Expects the URL to contain intro.
});

test('homepage has links to homepage', async ({ page }) => {
    await page.goto('http://localhost:3000/'); 

    // Expect a title "to contain" a substring.
    
    const homeButton = page.getByRole('link', { name: 'Home' }); // create a locator
    await expect(homeButton).toHaveAttribute('href', '/home'); // Expect an attribute "to be strictly equal" to the value.
    await homeButton.click(); // Click the get started link.
    await expect(page).toHaveURL(/.*home/); // Expects the URL to contain intro.
  });

import { test, expect, selectors } from '@playwright/test';

const url = '/home';

// test("website has redirect link to CMUOAuth", async ({ page }) => {
//     await page.goto(url);

//     const profileDropDown = page.locator("#ProfileDropdown");
//     await expect(profileDropDown).toBeDefined();
//     await profileDropDown.click();

//     const loginButton = page.locator("#Login");
//     await expect(loginButton).toBeDefined();
//     await loginButton.click();
//     await expect(page).toHaveURL(/.*oauth.cmu.ac.th\/v1\/Login.aspx.*/);
// });

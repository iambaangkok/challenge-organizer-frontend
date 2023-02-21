import { test, expect, selectors } from '@playwright/test';

const url = '/challenge';

test('challenge page has correct title, url', async ({ page }) => {
    await page.goto(url);

    await expect(page).toHaveTitle(/.*Challenge.*/);

    await expect(page).toHaveURL(/.*challenge.*/);
});

test('challenge page has links to homepage', async ({ page }) => {
    await page.goto(url);

    const homeButton = page.getByRole('link', { name: 'Home' });
    await expect(homeButton).toBeDefined();
    await expect(homeButton).toHaveAttribute('href', '/home');
    await homeButton.click();
    await expect(page).toHaveURL(/.*home/);
});

// test('challenge page has links to editchallenge page', async ({ page }) => {
//     await page.goto(url);

//     const editChallengeButton = page.locator('#EditChallengeButton');
//     await expect(editChallengeButton).toBeDefined();
//     await editChallengeButton.click();
//     await expect(page).toHaveURL(/.*editchallenge.*/);
// });

test("challenge page has links to host's user profile", async ({ page }) => {
    await page.goto(url);

    const hostLink = page.locator('#HostName');
    await expect(hostLink).toBeDefined();
    await hostLink.click();
    await expect(page).toHaveURL(/.*user.*/);
});

// test("challenge page has links to profile", async ({ page }) => {
//     await page.goto(url);

//     const profileDropDown = page.locator("#ProfileDropdown");
//     await expect(profileDropDown).toBeDefined();
//     await profileDropDown.dispatchEvent("click");

//     const profileButton = page.locator("#Profile");
//     await expect(profileButton).toBeDefined();
//     await expect(profileButton).toHaveAttribute("href", "/profile");
//     await profileButton.click();
//     await expect(page).toHaveURL(/.*profile/);
// });

test('challenge page has status button', async ({ page }) => {
    await page.goto(url);

    const statusButton = page.locator('#StatusButton');
    await expect(statusButton).toBeDefined();
});

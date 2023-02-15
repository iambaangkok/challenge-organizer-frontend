import { test, expect, selectors } from '@playwright/test';

const url = '/profile';

test('profile page has correct title, url', async ({ page }) => {
    await page.goto(url);

    await expect(page).toHaveTitle(/.*Profile.*/);

    await expect(page).toHaveURL(/.*profile/);
});

test('profile page has links to homepage', async ({ page }) => {
    await page.goto(url);

    const homeButton = page.getByRole('link', { name: 'Home' });
    await expect(homeButton).toBeDefined();
    await expect(homeButton).toHaveAttribute('href', '/home');
    await homeButton.click();
    await expect(page).toHaveURL(/.*home/);
});

test('profile page has links to shop', async ({ page }) => {
    await page.goto(url);

    const shopButton = page.getByRole('link', { name: 'Shop' });
    await expect(shopButton).toBeDefined();
    await expect(shopButton).toHaveAttribute('href', '/shop');
    await shopButton.click();
    await expect(page).toHaveURL(/.*shop/);
});

// test("profile page has links to profile", async ({ page }) => {
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

test('profile page has edit button', async ({ page }) => {
    await page.goto(url);

    const editProfileButton = page.locator('#EditProfileButton');
    await expect(editProfileButton).toBeDefined();
    await expect(editProfileButton).toHaveText('Edit Profile', {
        ignoreCase: true,
    });
    // await editProfileButton.click();
    // await expect(page).toHaveURL(/.*challenge\?id=.*/);
});

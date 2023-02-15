import { test, expect } from '@playwright/test';

const url = '/createchallenge';

test('challenge creation page has correct title, url', async ({ page }) => {
    await page.goto(url);

    await expect(page).toHaveTitle(/Challenge Creation/);

    await expect(page).toHaveURL(/.*createchallenge/);
});

// test('challenge creation input fields test, page correct input', async ({
//     page,
// }) => {
//     await page.goto(url);

//     const loc = page.locator('#ChallengeTitle');
//     const title = loc.getByRole('textbox');
//     await title.fill('Test Title');
//     await expect(title).toHaveValue('Test Title');

//     const description = page.getByTitle(/.*Description.*/);
//     await description.fill('Test Description');
//     await expect(description).toHaveValue('Test Description');

//     const startDate = page.getByLabel(/.*Start Date.*/);
//     await startDate.fill('16/11/2023');
//     await expect(startDate).toHaveValue('16/11/2023');

//     const endDate = page.getByLabel(/.*End Date.*/);
//     await endDate.fill('17/11/2023');
//     await expect(endDate).toHaveValue('17/11/2023');

//     const type = page.getByLabel(/.*Type.*/);
//     await type.selectOption('Single');
//     await expect(type).toHaveValue('Single');

//     const format = page.getByLabel(/.*Format.*/);
//     await format.selectOption('Point Based');
//     await expect(format).toHaveValue('Point Based');

//     const participantLimit = page.getByLabel(/.*Participant Limit.*/);
//     await participantLimit.fill('20');
//     await expect(participantLimit).toHaveValue('20');

//     const saveButton = page.getByTitle(/.*Save and Go Back.*/);
//     await expect(saveButton).toHaveAttribute('href', /.*challenge?id=.*/);
//     await saveButton.click();
//     await expect(page).toHaveURL(/.*challenge?id=.*/); // Expects the URL to contain intro.
// });

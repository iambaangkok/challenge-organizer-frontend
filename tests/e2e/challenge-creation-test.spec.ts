import { test, expect } from '@playwright/test';

test('challenge creation page has correct title, url', async ({ page }) => {
    await page.goto('/challenge-creation');

    await expect(page).toHaveTitle(/Challenge Creation/);

    await expect(page).toHaveURL(/.*challenge-creation/);
});

test('challenge creation page correct input input fields test', async ({
    page,
}) => {
    await page.goto('/challenge-creation');

    const title = page.getByLabel(/.*Challenge Title.*/);
    await title.fill('Test Title');
    await expect(title).toHaveValue('Test Title');

    const description = page.getByLabel(/.*Description.*/);
    await description.fill('Test Description');
    await expect(description).toHaveValue('Test Description');

    const startDate = page.getByLabel(/.*Start Date.*/);
    await startDate.fill('2023-11-16');
    await expect(startDate).toHaveValue('2023-11-16');

    const endDate = page.getByLabel(/.*End Date.*/);
    await endDate.fill('2023-11-17');
    await expect(endDate).toHaveValue('2023-11-17');

    const type = page.getByLabel(/.*Type.*/);
    await type.selectOption('Single');
    await expect(type).toHaveValue('Single');

    const format = page.getByLabel(/.*Format.*/);
    await format.selectOption('Single');
    await expect(format).toHaveValue('Single');

    const participantLimit = page.getByLabel(/.*Participant Limit.*/);
    await participantLimit.fill('20');
    await expect(participantLimit).toHaveValue('20');

    const saveButton = page.getByTitle(/.*Save and Go Back.*/);
    await expect(saveButton).toHaveAttribute('href', /.*challenge?id=.*/);
    await saveButton.click();
    await expect(page).toHaveURL(/.*challenge?id=.*/); // Expects the URL to contain intro.
});

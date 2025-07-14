import {expect, Locator, test} from '@playwright/test';

test('Assertions Tests', async ({page}) => {

    await page.goto("https://www.saucedemo.com/");

    const loginButton:Locator = await page.locator("input[data-test='login-button']");

    await expect(loginButton).toBeVisible();
    await expect(loginButton).toHaveCount(1);


})

import {expect, Locator, test} from '@playwright/test';

const baseURL = 'https://www.saucedemo.com/';

test('Assertions Tests', async ({page}) => {

    await page.goto(baseURL);

    const loginButton:Locator = await page.locator("input[data-test='login-button']");

    await expect(loginButton).toBeVisible();
    await expect(loginButton).toHaveCount(1);

    // await expect(loginButton).toBeDisabled();

    await expect(loginButton).toHaveText('Login');

    await expect(loginButton).toHaveAttribute('type','submit');

    await expect(page).toHaveTitle('Swag Labs');

    await expect(page).toHaveURL(baseURL);



})

test('Non Retrying Assertions', async ({page}) => {


    await page.goto(baseURL);
    
    expect(5).toBe(5);
    expect(true).toBeTruthy();
    expect(false).toBeFalsy();
    expect(3).toBeLessThan(5);
    expect(4).toBeGreaterThan(1);

})

test('Custom Error Messages', async({page}) => {

    await page.goto(baseURL);
    await expect(page,"This is Failure Message").not.toHaveTitle('Swag abs');

})
import {test} from '@playwright/test';

test('xpath locators', async({page}) => {

    await page.goto('https://www.saucedemo.com/')
    await page.locator('//input[@data-test="username"]').fill("standard_user");
    await page.locator('//input[@data-test="password"]').fill("secret_sauce");

    await page.locator('//input[@type="submit"]').click();


    await page.waitForTimeout(5000);

})
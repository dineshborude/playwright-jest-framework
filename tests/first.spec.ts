import {Browser, chromium, Page, test} from '@playwright/test';


test("First Test Block", async({page}) => {

    await page.goto('https://www.google.com/');

    console.log("First Test");

})


test("Second Test Block", async () => {

    console.log('Without Page Fixture');
    
    const browser:Browser = await chromium.launch();
    const context:Context = await browser.newContext();
    const page:Page = await context.newPage();

    await page.goto('https://www.guthib.com');

})
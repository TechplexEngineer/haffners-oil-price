
import { chromium } from 'playwright';

; (async () => {
    const browser = await chromium.launch({
        headless: false
    });

    // Creates a new browser context. It won't share cookies/cache with other browser contexts.
    const context = await browser.newContext({
        bypassCSP: true,
    });

    // const page = await browser.newPage();
    const page = await context.newPage();


    await page.goto("https://haffners.com/");

    await page.waitForSelector("span.price");

    console.log(await page.locator("span.price").first().innerText());

    // await page.pause();

    browser.close()

})();
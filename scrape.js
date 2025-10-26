
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

    // Wait for the element containing "Today's Oil Price:"
    await page.waitForSelector('text=Today\'s Oil Price:');

    // Find the div containing "Today's Oil Price:" and get the price from the second span
    const priceText = await page.locator('text=Today\'s Oil Price:').locator('..').locator('span.lg\\:text-xl').innerText();

    // Extract just the numeric price (e.g., "3.099" from "$3.099")
    const price = priceText.replace('$', '').trim();
    console.log(`$${price}`);

    // await page.pause();

    browser.close()

})();
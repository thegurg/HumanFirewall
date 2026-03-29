const { chromium } = require('playwright');
const path = require('path');

(async () => {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('console', msg => {
        if (msg.type() === 'error') errors.push(msg.text());
    });
    
    const filePath = 'file://' + path.resolve(__dirname, 'index.html');
    await page.goto(filePath, { waitUntil: 'networkidle' });
    
    // Check if page loaded
    const title = await page.title();
    console.log('Page title:', title);
    
    // Check for main elements
    const logo = await page.$('.logo');
    console.log('Logo found:', !!logo);
    
    const screens = await page.$$('.screen');
    console.log('Screens count:', screens.length);
    
    // Test navigation
    await page.click('[data-screen="scanner"]');
    await page.waitForTimeout(500);
    const scannerActive = await page.$('#scanner.active');
    console.log('Scanner screen active:', !!scannerActive);
    
    if (errors.length > 0) {
        console.log('Errors found:', errors);
        process.exit(1);
    } else {
        console.log('No errors! Page loaded successfully.');
    }
    
    await browser.close();
})();

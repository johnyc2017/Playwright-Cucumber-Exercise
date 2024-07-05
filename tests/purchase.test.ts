import { test, expect } from '@playwright/test';

test('Purchase workflow test', async ({ page }) => {
    const purchasePage = new PurchasePage(page.context());
    
    // Navigate to the login page (assuming the initial navigation is handled outside this class)
    // Replace this with your actual navigation code
    await page.goto('https://www.swaglabs.com');
    
    await purchasePage.login();
    await purchasePage.addToCart();
    await purchasePage.openCart();
    await purchasePage.clickCheckoutButton();
    await purchasePage.fillUserInfo();
    await purchasePage.finishCheckout();
    await purchasePage.verifyCheckoutHeaderText('Checkout Complete!');
});

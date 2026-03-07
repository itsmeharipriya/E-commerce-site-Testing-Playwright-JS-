const { test, expect } = require('@playwright/test');
const { HomePage } = require('../Pages/bew.homepage');
const { CheckoutPage } = require('../Pages/checkout.page');

test('Complete E2E Checkout Flow', async ({ page }) => {

    const homePage = new HomePage(page);
    const checkoutPage = new CheckoutPage(page);

    await homePage.navigate();
    await homePage.verifyHomePageLoaded();

    await homePage.clickMensOuterwear();
    await homePage.selectGreenFlexProduct();
    await homePage.verifyProductDetailPageLoaded();
    await homePage.addProductToCart();

    await homePage.goToCheckout();
    await expect(page).toHaveURL(/\/checkout/);

    await checkoutPage.fillCheckoutForm({
        email: 'ammu@example.com',
        phone: '9876543210',
        address: '123 Playwright Street',
        city: 'Testville',
        state: 'Ontario',
        zip: 'A1B2C3',
        cardName: 'Ammu Tester',
        cardNumber: '4111 1111 1111 1111',
        cvv: '123'
    });

   await checkoutPage.placeOrder();
//await page.pause();



await expect(page).toHaveURL(/checkout\/success/);

await checkoutPage.clickFinish();

await expect(page).toHaveURL('https://shop.polymer-project.org/');
});
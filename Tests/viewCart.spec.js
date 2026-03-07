const { test, expect } = require('@playwright/test');
const { HomePage } = require('../Pages/bew.homepage');

test('Go to View Cart page', async ({ page }) => {
    const homePage = new HomePage(page);

    // Go to homepage
    await homePage.navigate();
    await homePage.verifyHomePageLoaded();

    // Go to Men's Outerwear
    await homePage.clickMensOuterwear();

    // Select Green Flex product
    await homePage.selectGreenFlexProduct();
    await homePage.verifyProductDetailPageLoaded();

    // Add to cart
    await homePage.addProductToCart();

    // Go to View Cart page
    await homePage.goToViewCart();

    // Verify URL contains /cart
    await expect(page).toHaveURL(/\/cart/);
});
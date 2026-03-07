// Pages/bew.homepage.js
class HomePage {
    constructor(page) {
        this.page = page;

        this.logo = page.locator('app-header');
        this.mensOuterwearLink = page.locator('#tabContainer a[href="/list/mens_outerwear"]').first();
        this.greenFlexProduct = page.locator('a[href*="Green+Flex+Fleece+Zip+Hoodie"]');
        this.productDetailSection = page.locator('shop-detail');
        this.addToCartButton = page.locator('button[aria-label="Add this item to cart"]');
        this.viewCartLink = page.locator('#viewCartAnchor');
        this.checkoutLink = page.locator('a[href="/checkout"]');
    }

    async navigate() {
        await this.page.goto('https://shop.polymer-project.org/');
    }

    async verifyHomePageLoaded() {
        await this.logo.waitFor({ state: 'attached' });
    }

    async clickMensOuterwear() {
        await this.mensOuterwearLink.click();
    }

    async selectGreenFlexProduct() {
        await this.greenFlexProduct.click();
    }

    async verifyProductDetailPageLoaded() {
        await this.productDetailSection.waitFor({ state: 'visible' });
    }

    async addProductToCart() {
        await this.addToCartButton.waitFor({ state: 'visible' });
        await this.addToCartButton.click();
    }

    async goToViewCart() {
        await this.viewCartLink.waitFor({ state: 'visible' });
        await this.viewCartLink.click();
    }

    async goToCheckout() {
        await this.checkoutLink.waitFor({ state: 'visible' });
        await this.checkoutLink.click();
    }
}

module.exports = { HomePage };
// Pages/checkout.page.js
class CheckoutPage {
    constructor(page) {
        this.page = page;

        this.emailInput = page.locator('#accountEmail');
        this.phoneInput = page.locator('#accountPhone');
       this.checkoutSection = page.locator('shop-checkout');

this.addressInput = this.checkoutSection.locator('#shipAddress');
this.cityInput = this.checkoutSection.locator('#shipCity');
this.stateInput = this.checkoutSection.locator('#shipState');
this.zipInput = this.checkoutSection.locator('#shipZip');
        this.countrySelect = page.locator('#shipCountry');
        this.billingCheckbox = page.locator('#setBilling');
        this.cardNameInput = page.locator('#ccName');
        this.cardNumberInput = page.locator('#ccNumber');
        this.cvvInput = page.locator('#ccCVV');
     this.billAddressInput = this.checkoutSection.locator('#billAddress');
this.billCityInput = this.checkoutSection.locator('#billCity');
this.billStateInput = this.checkoutSection.locator('#billState');
this.billZipInput = this.checkoutSection.locator('#billZip');
        this.placeOrderButton = page.locator('input[value="Place Order"]');
this.finishLink = page.getByRole('link', { name: 'Finish', exact: true });

    }

    async fillCheckoutForm({
        email,
        phone,
        address,
        state,
        city,
        zip,
        cardName,
        cardNumber,
        cvv
    }) {
        await this.emailInput.waitFor({ state: 'visible' });

        await this.emailInput.fill(email);
        await this.phoneInput.fill(phone);
        await this.addressInput.fill(address);
        await this.cityInput.fill(city);
        
        await this.stateInput.fill(state);
        await this.zipInput.fill(zip);

        await this.countrySelect.selectOption('CA');

        if (!(await this.billingCheckbox.isChecked())) {
            await this.billingCheckbox.check();
        }

        await this.cardNameInput.fill(cardName);
        await this.cardNumberInput.fill(cardNumber);
        await this.cvvInput.fill(cvv);
        await this.billAddressInput.fill(address);
        await this.billCityInput.fill(city);
        await this.billStateInput.fill(state);
        await this.billZipInput.fill(zip);
    }

    async placeOrder() {
    await this.placeOrderButton.waitFor({ state: 'attached' });
    await this.placeOrderButton.scrollIntoViewIfNeeded();
    await this.placeOrderButton.click({ force: true });
    }
async clickFinish() {
  // wait until success page loads
  await this.page.waitForURL(/checkout\/success/);

  const finish = this.page.getByRole('link', { name: 'Finish', exact: true });

  await finish.waitFor({ state: 'visible' });
  await finish.scrollIntoViewIfNeeded();

  await Promise.all([
    this.page.waitForURL('https://shop.polymer-project.org/'),
    finish.click()
  ]);
}

}

module.exports = { CheckoutPage };
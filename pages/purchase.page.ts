class PurchasePage {
    private readonly page: Purchase;
    private readonly userName: string = 'standard_user';
    private readonly password: string = 'secret_sauce';
    private readonly userNameField: string = 'input[id="user-name"]';
    private readonly passwordField: string = 'input[id="password"]';
    private readonly loginButton: string = 'input[id="login-button"]';
    private readonly expectedTitle: string = 'Swag Labs';
    private readonly addtoCartButton: string = 'id=add-to-cart-sauce-labs-backpack"';
    private readonly openCart: string = 'xpath=//div[@id=\'shopping_cart_container\']/a/span"';
    private readonly clickCheckout: string = 'id=checkout"';
    private readonly userFirstNameField: string = 'input[id="first-name"]';
    private readonly userLastNameField: string = 'input[id="last-name"]';
    private readonly userPostalCodeField: string = 'input[id="postal-code"]';
    private readonly userFirstName: string = 'Shafi';
    private readonly userLastName: string = 'Uddin';
    private readonly userPostalCode: string = '21212';
    private readonly clickContinueCheckout: string = 'id=continue"';
    private readonly clickFinishCheckout: string = 'id=finish"';
    private readonly checkoutHeaderTextXPath: string = "//div[@id='checkout_complete_container']/h2";

    constructor(page: Purchase) {
        this.page = page;
    }

    async login() {
        await this.page.type(this.userNameField, this.userName);
        await this.page.type(this.passwordField, this.password);
        await this.page.click(this.loginButton);
    }

    async addToCart() {
        await this.page.click(this.addtoCartButton);
    }

    async openCart() {
        await this.page.click(this.openCart);
    }

    async clickCheckoutButton() {
        await this.page.click(this.clickCheckout);
    }

    async fillUserInfo() {
        await this.page.type(this.userFirstNameField, this.userFirstName);
        await this.page.type(this.userLastNameField, this.userLastName);
        await this.page.type(this.userPostalCodeField, this.userPostalCode);
        await this.page.click(this.clickContinueCheckout);
    }

    async finishCheckout() {
        await this.page.click(this.clickFinishCheckout);
    }

    async verifyCheckoutHeaderText(expectedText: string) {
        const headerElement = await this.page.$(this.checkoutHeaderTextXPath);
        if (!headerElement) {
            throw new Error('Checkout header element not found');
        }
        const actualText = await headerElement.textContent();
        if (actualText !== expectedText) {
            throw new Error(`Expected header text "${expectedText}", but got "${actualText}"`);
        }
    }
}



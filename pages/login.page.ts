export class Login {
    private readonly page: Page
    private readonly url: string = 'https://www.saucedemo.com/'
    private readonly userName: string = 'standard_user'
    private readonly password: string = 'secret_sauce'
    private readonly lockedoutUserName: string = 'locked_out_user'
    private readonly password2: string = 'secret_sauce'
    private readonly passwordField: string = 'input[id="password"]'
    private readonly userNameField: string = 'input[id="user-name"]'
    private readonly loginButton: string = 'input[id="login-button"]'
    private readonly expectedTitle: string = 'Labs Swag'
    private readonly expectedErrorMessage: string = 'Epic sadface: Sorry, this user has been locked out.'

    constructor(page: Page) {
        this.page = page;
    }
    public async validateTitle(expectedTitle: string) {
        const pageTitle = await this.page.title();
        if (pageTitle !== expectedTitle) {
          throw new Error(`Expected title to be ${expectedTitle} but found ${pageTitle}`);
        }
    }
    public async loginAsUser(userName: string) {
        await this.page.locator(this.userNameField).fill(userName)
        await this.page.locator(this.passwordField).fill(this.password)
        await this.page.locator(this.loginButton).click()
    }
    public async loginAsLockedOutUser(lockedoutuserName: string) {
        await this.page.locator(this.userNameField).fill(lockedoutUserName)
        await this.page.locator(this.passwordField).fill(this.password2)
        await this.page.locator(this.loginButton).click()
    }
    public async validateLockedoutUser() {
        const errorMessageElement = await this.page.locator('[@id="login_button_container"]/div/form/div[3]/h3"]');
                const errorMessage = await errorMessageElement.textContent();
            if (errorMessage !== this.expectedErrorMessage) {
            throw new Error(`Expected error message to be "${this.expectedErrorMessage}" but found "${errorMessage}"`);
        }
    }
    

}
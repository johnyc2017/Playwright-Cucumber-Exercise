import { Given, Then, And } from '@cucumber/cucumber';
import { LoginPage } from '../pages/login.page'; 
import { ProductListingPage } from '../pages/productListing.page'; 
import { expect } from 'chai';

let loginPage: LoginPage;
let productListingPage: ProductListingPage;

Given('I open the {string} page', async (url: string) => {
    await page.goto(url); 
});

Then('I will login as {string}', async (username: string) => {
    loginPage = new LoginPage(page); 
    await loginPage.login(username, 'secret_sauce'); 
});

And('I sort the items by {string}', async (sortOption: string) => {
    productListingPage = new ProductListingPage(page); 
    await productListingPage.sortProductsByPrice(sortOption);
});

And('I validate all 6 items are sorted correctly by price', async () => {
    const sortedCorrectly = await productListingPage.verifyProductsSortedByPrice();
    expect(sortedCorrectly).to.be.true;
});

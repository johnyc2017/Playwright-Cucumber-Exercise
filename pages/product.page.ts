import { Given, When, Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { ProductListingPage } from '../pages/productListing.page';

const productListingPage = new ProductListingPage(getPage());

Given('I am on the product listing page', async () => {
    await productListingPage.navigate(); 
});

When('I sort products by {string}', async (sortOption: string) => {
    await productListingPage.sortProductsByPrice(sortOption); 
});

Then('products should be sorted by price {string} correctly', async (sortOption: string) => {
    const sortedCorrectly = await productListingPage.verifyProductsSortedByPrice(sortOption);
    expect(sortedCorrectly).toBe(true);
});

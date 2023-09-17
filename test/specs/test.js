import { expect } from 'chai'
import { appConfig } from '../../config.js'
import HomePage from '../pageobjects/home.page.js'
import ProductsPage from '../pageobjects/products.page.js'
import CartPage from '../pageobjects/cart.page.js'
import GoogleSearchPage from '../pageobjects/googleSearch.page.js'


describe('General store app', () => {
    it('should allow item checkout', async () => {

        await HomePage.selectCountry(appConfig.country);
        await HomePage.enterUsername(appConfig.username);
        await HomePage.letsShop();
        expect(await ProductsPage.isScreenDisplayed()).to.be.true;

        await ProductsPage.addProductToCart('Nike SFB Jungle');
        await ProductsPage.addProductToCart('PG 3');
        await ProductsPage.goToCart();
        expect(await CartPage.getProductCount()).to.equal(2);
        expect(await CartPage.verifyCartHasProduct('Nike SFB Jungle')).to.be.true;
        expect(await CartPage.verifyCartHasProduct('PG 3')).to.be.true;
        expect(await CartPage.verifyCartTotal()).to.be.true;
        
        await CartPage.selectSendEmailsCheckbox();
        await CartPage.proceed();
        await GoogleSearchPage.search('General Store');
        await GoogleSearchPage.navigateBack();
        expect(await HomePage.isScreenDisplayed()).to.be.true;

    })
})


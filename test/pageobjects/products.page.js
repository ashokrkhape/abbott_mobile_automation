import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductsPage extends Page {
    /**
     * define selectors
     */

    productList() {
        return $('[resource-id="com.androidsample.generalstore:id/rvProductList"]');
    }

    productTileByProductName(productName) {
        return $(`//*[@resource-id="com.androidsample.generalstore:id/productName" and @text="${productName}"]/..`);
    }

    addToCartButtonByProductName(productName) {
        return $(`//*[@resource-id="com.androidsample.generalstore:id/productName" and @text="${productName}"]/..
                //*[@resource-id="com.androidsample.generalstore:id/productAddCart"]`);
    }

    cartButtuon() {
        return $('[resource-id="com.androidsample.generalstore:id/appbar_btn_cart"]');
    }


    /**
     * a method to encapsule automation code to interact with the page
     */

    async isScreenDisplayed() {
        return await this.productList().isDisplayed();
    }

    async addProductToCart(productName) {
        await this.scrollUntilElementVisible(productName);
        await this.addToCartButtonByProductName(productName).click();
    }

    async goToCart() {
        await this.cartButtuon().click();
    }

}

export default new ProductsPage();

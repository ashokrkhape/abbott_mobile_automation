import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CartPage extends Page {
    /**
     * define selectors
     */

    productNames() {
        return $$('[resource-id="com.androidsample.generalstore:id/productName"]');
    }

    productPrices() {
        return $$('[resource-id="com.androidsample.generalstore:id/productPrice"]');
    }

    priceLabelByProductName(productName) {
        return $(`//*[@resource-id="com.androidsample.generalstore:id/productName" 
                and @text="${productName}"]/..
                //*[@resource-id="com.androidsample.generalstore:id/productPrice"]`);
    }

    cartTotalLabel() {
        return $('[resource-id="com.androidsample.generalstore:id/totalAmountLbl"]');
    }
    
    sendEmailsCheckbox() {
        return $('[text="Send me e-mails on discounts related to selected products in future"]');
    }

    proceedButton() {
        return $('[resource-id="com.androidsample.generalstore:id/btnProceed"]');
    }
    /**
     * a method to encapsule automation code to interact with the page
     */

    async getPriceByProductName(productName) {
        return await this.priceLabelByProductName(productName).getText();
    }

    async verifyCartHasProduct(product) {
       return await this.productNames().map(productName => productName.getText()).includes(product);
    }

    async getProductCount() {
        return await this.productNames().length;
    }

    async verifyCartTotal() {
        const sumOfPrices = await this.productPrices().map(async price => await this.convertAmountToNumber(price, '$'))
                     .reduce((sum, price) => sum + price, 0);
        const cartTotal = await this.convertAmountToNumber(this.cartTotalLabel(), '$');
        return sumOfPrices === cartTotal;
        
    }

    async selectSendEmailsCheckbox() {
        await this.sendEmailsCheckbox().click();
    }

    async proceed() {
        await this.proceedButton().click();
    }

}

export default new CartPage();

import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors
     */

    countryListButton() {
        return $('#spinnerCountry');
    }

    countryListValues() {
        return $$('id=android:id/text1');
    }

    countryValue(countryName) {
        return $(`[resource-id="android:id/text1"][text="${countryName}"]`);
    }

    username() {
        return $('#nameField');
    }

    letsShopButton() {
        return $('#btnLetsShop');
    }


    /**
     * a method to encapsule automation code to interact with the page
     */

    async isScreenDisplayed() {
        return await this.countryListButton().isDisplayed();
    }

    async selectCountry(countryName) {
        await this.countryListButton().click();
        await this.scrollUntilElementVisible(countryName);
        await this.countryValue(countryName).click();
    }

    async enterUsername(username) {
        await this.username().setValue(username);
    }

    async letsShop() {
        await this.letsShopButton().click();
    }


}

export default new HomePage();

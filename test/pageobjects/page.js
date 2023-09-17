import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {

    async getNumberFromAmount(amountElement) {
        const amount = await amountElement.getText();
        return parseInt(amount.replace(/\$/g, ''));
    }

    async scrollUntilElementVisible(elementText) {
        const selector = `android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("${elementText}")`;
        await $(selector);
    }

    async sendKeys(keys) {
        await browser.keys(keys);
    }

    async navigateBack() {
        await browser.back();
    }

}

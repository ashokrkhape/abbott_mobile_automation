import { browser } from '@wdio/globals'
import Utility from '../../utilities/utility.js'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {

    async convertAmountToNumber(amountElement, currency) {
        const amount = await amountElement.getText();
        return Utility.getNumberFromAmount(amount, currency);
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

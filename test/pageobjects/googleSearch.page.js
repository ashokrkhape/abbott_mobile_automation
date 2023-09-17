import { $ } from '@wdio/globals'
import { Key } from 'webdriverio'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class GoogleSearchPage extends Page {
    /**
     * define selectors
     */

    googleSearchTextbox() {
        return $('//*[@resource-id="tsf"]//android.widget.EditText');
    }  

    /**
     * a method to encapsule automation code to interact with the page
     */

   async search(text) {
    await this.googleSearchTextbox().click();
    await this.sendKeys([...text]);
    await this.sendKeys(Key.Enter);
   }

}

export default new GoogleSearchPage();

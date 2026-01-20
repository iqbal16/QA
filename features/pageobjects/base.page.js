import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
class Basepage {
    open (path) {
        return browser.url (path);
    }
}

export default Basepage;

import BasePage from "./base.page.js";

class SauceDemoInventoryPage extends BasePage {
  get inventoryContainer() { return $("#inventory_container"); }
  get title() { return $(".title"); } // biasanya "Products"

  async waitUntilLoaded() {
    await this.inventoryContainer.waitForDisplayed({ timeout: 10000 });
  }
}

export default new SauceDemoInventoryPage();

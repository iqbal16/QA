import Basepage from "./base.page";

class Cartpage extends Basepage{
    get cartlist() {
        return $('[data-test="cart-list"]');
    }

    cartItemByName (name) {
        return $(`.inventory_item_name=${name}`);
    }
    async waitUntilLoaded() {
      await this.cartlist.waitForDisplayed({timeout : 5000});
 }
    async isProductDisplayed(name) {
        return await this.cartItemByName(name).isDisplayed();
  }
}

export default new Cartpage();
import BasePage from "./base.page.js";

class SauceDemoInventoryPage extends BasePage {
  get inventoryContainer() { return $("#inventory_container"); }
  get title() { return $(".title"); } // biasanya "Products"

  async waitUntilLoaded() {
    await this.inventoryContainer.waitForDisplayed({ timeout: 10000 });
  }
//add to cart backpack
  addToCartButton(productName) {
    return $(`button[data-test="add-to-cart-${productName
      .toLowerCase()
      .replaceAll(" ", "-")}"]`);
  }
    get cartIcon() {
    return $('[data-test="shopping-cart-link"]');
  }
    get cartBadge() {
    return $('[data-test="shopping-cart-badge"]');
  }

    async waitUntilLoaded() {
    await this.inventoryContainer.waitForDisplayed();
  }

  async addProductToCart(productName) {
    await this.addToCartButton(productName).click();
  }

  slugify(productName) {
    return productName.toLowerCase().replaceAll(" ", "-");
  } 
  
  removeButton(productName) {
  const slug = this.slugify(productName);
    return $(`button[data-test="remove-${slug}"]`);
  }

  async removeProductFromCart(productName) {
    const btn = await this.removeButton(productName);
    await btn.waitForClickable({ timeout: 5000 });
    await btn.click();
  }

  async openCart() {
    await this.cartIcon.click();
  }
}


export default new SauceDemoInventoryPage();

import { Given, When, Then } from "@wdio/cucumber-framework";
import LoginPage from "../pageobjects/saucedemo.login.page.js";
import InventoryPage from "../pageobjects/saucedemo.inventory.page.js";
import CartPage from "../pageobjects/saucedemo.cart.page.js";

Given("I am login in as {string}", async (username) => {
  await LoginPage.openLogin();
  await LoginPage.login(username, "secret_sauce");
  await InventoryPage.waitUntilLoaded();
});

When("I Add product {string} to cart", async (productName) => {
  await InventoryPage.addProductToCart(productName);
});

When ("I remove product {string} from cart", async (productname) =>{
  await InventoryPage.removeProductFromCart(productname);
})

Then ("cart badge should not be displayed", async () => {
  await expect(InventoryPage.cartBadge).not.toBeDisplayed();
})

Then("cart badge should show {string}", async (count) => {
  await InventoryPage.cartBadge.waitForDisplayed ({timeout: 5000});
  await expect(InventoryPage.cartBadge).toHaveText(count);
});

Then("I should see {string} in cart page", async (productName) => {
  await InventoryPage.openCart();
  await CartPage.waitUntilLoaded();
  await expect(await CartPage.isProductDisplayed(productName)).toBe(true);
});

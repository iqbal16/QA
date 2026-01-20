import { Given, When, Then } from "@wdio/cucumber-framework";
import LoginPage from "../pageobjects/saucedemo.login.page.js";
import InventoryPage from "../pageobjects/saucedemo.inventory.page.js";

Given("I am on the SauceDemo login page", async () => {
  await LoginPage.openLogin();
});

When("I login with username {string} and password {string}", async (username, password) => {
  await LoginPage.login(username, password);
});

Then("I should be on the inventory page", async () => {
  await InventoryPage.waitUntilLoaded();
  await expect(InventoryPage.title).toHaveText("Products");
});

Then("I should see an error message {string}", async (expected) => {
  const actual = await LoginPage.getErrorText();
  await expect(actual).toContain(expected);
});

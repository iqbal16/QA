import { Before } from "@wdio/cucumber-framework";

Before(async () => {
  await browser.reloadSession();
  await browser.url("https://www.saucedemo.com/");
  await browser.execute(() => {
    window.localStorage.clear();
    window.sessionStorage.clear();
  });
});

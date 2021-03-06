const puppeteer = require("puppeteer");
const { generateText, checkAndGenerate } = require("./util");
// import { generateText } from "./util"; // doesn't handle ES6 import in testing

test("should output name and age", () => {
  const text = generateText("Gautier", 28);
  expect(text).toBe("Gautier (28 years old)");
  //   const text2 = generateText("Anna", 22);
  //   expect(text2).toBe("Anna (22 years old)");
});

// test("should output data-less text", () => {
//   const text = generateText("", null);
//   expect(text).toBe(" (null years old)");
// });

test("should generate a valid text output", () => {
  const text = checkAndGenerate("Max", 29);
  expect(text).toBe("Max (29 years old)");
});

test("should create an element with text and correct class", async () => {
  const browser = await puppeteer.launch({
    headless: false, // if true
    slowMo: 80, // commented
    args: ["--window-size=1920,1080"] // and commented, doesn't open the chromium browser and accelerate the tests
  });
  const page = await browser.newPage();
  await page.goto("http://127.0.0.1:5500/index.html");
  await page.click("input#name");
  await page.type("input#name", "Gautier");
  await page.click("input#age");
  await page.type("input#age", "28");
  await page.click("#btnAddUser");
  const finalText = await page.$eval(".user-item", el => el.textContent);
  expect(finalText).toBe("Gautier (28 years old)");
}, 10000); // the second argument is the time chromium accords to us for testing

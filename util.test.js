const { generateText } = require("./util");
// import { generateText } from "./util"; // doesn't handle ES6 import in testing

test("should output name and age", () => {
  const text = generateText("Gautier", 28);
  expect(text).toBe("Gautier (28 years old)");
});

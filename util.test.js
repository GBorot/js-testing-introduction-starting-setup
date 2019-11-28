const { generateText } = require("./util");
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

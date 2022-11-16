let Tesseract = require("tesseract.js");

Tesseract.recognize("./pgdas.jpg", "eng", {
  logger: (m) => console.log(m),
}).then(({ data: { text } }) => {
  console.log(text);
});

import { randomText } from "./randomTextUtil";

const listOfTexts = [
  "Hello, you!",
  "Guten Tag!",
  "Hola!",
  "Bonjour!",
  "Ciao!",
  "Namaste!",
  "Salaam!",
  "Konnichiwa!",
  "Merhaba!",
  "Sawubona!",
  "Hej!",
];

describe("randomText", () => {
  test("should render a text from the list", () => {
    const random = randomText();
    expect(listOfTexts).toContain(random);
  });
});

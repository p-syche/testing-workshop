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

export const randomText = () => {
  const randomText =
    listOfTexts[Math.floor(Math.random() * listOfTexts.length)];
  return randomText;
};

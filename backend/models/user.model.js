const { v4: uuidv4 } = require("uuid");

module.exports = [
  {
    userId: uuidv4(),
    username: "shadow",
    dob: "10-19-1983",
    email: "jon@example.com",
    password: "password",
    wishlist: [
      {
        name: "Amazon Jacket",
        link: "https://www.amazon.com/Amazon-Essentials-Lightweight-Water-Resistant-Packable/dp/B07BN72SZ5?ref_=Oct_DLandingS_D_2af93ef5_1",
        wasBought: false,
      },
    ],
    friends: ["albatross"],
  },
  {
    userId: uuidv4(),
    username: "albatross",
    dob: "4-2-1999",
    email: "doe@example.com",
    password: "password2",
    wishlist: [
      {
        name: "Crucial BX500",
        link: "https://www.amazon.com/Crucial-BX500-NAND-2-5-Inch-Internal/dp/B07YD579WM/ref=sr_1_18?keywords=2tb%2Bssd&qid=1672640352&sprefix=2tb%2Caps%2C93&sr=8-18&th=1",
        wasBought: false,
      },
    ],
    friends: ["shadow"],
  },
];

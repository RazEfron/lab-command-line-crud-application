const { nanoid } = require("nanoid");
// const chalk = require("chalk");

const purchases = require("./data/purchases.json");
const {
  index,
  show,
  create,
  update,
  destroy,
} = require("./src/purchasesController");

const inform = console.log;

const userInput = process.argv[2];

function run() {
  switch (userInput) {
    case "index":
      const formattedPurchases = index(purchases);
      inform(formattedPurchases);
      break;
    case "show":
      const purchase = show(purchases, process.argv[3]);
      inform(purchase);
      break;
    case "create":
      break;
    case "update":
      break;
    case "delete":
      break;
  }
}

run();

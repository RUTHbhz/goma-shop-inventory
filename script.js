const shopName = "Kivu Shop";
const currency = "CDF";
const lowStockThreshold = 5;

const products = [
  { name: "Cassava flour", price: 2500, quantity: 12 },
  { name: "Kivu coffee", price: 8000, quantity: 4 },
  { name: "Palm oil", price: 6000, quantity: 7 },
  { name: "Beans", price: 3500, quantity: 3 },
  { name: "Soap", price: 2000, quantity: 18 },
];

function calculateStockValue(product) {
  return product.price * product.quantity;
}

function formatCurrency(amount) {
  return `${amount.toLocaleString("en-CD")} ${currency}`;
}

function displayProduct(product) {
  console.log(
    `${product.name} | Unit price: ${formatCurrency(product.price)} | ` +
      `Quantity: ${product.quantity} | Stock value: ${formatCurrency(calculateStockValue(product))}`,
  );
}

function displayInventoryReport() {
  const productsWithValues = products.map((product) => ({
    ...product,
    stockValue: calculateStockValue(product),
  }));
  const totalInventoryValue = productsWithValues.reduce(
    (total, product) => total + product.stockValue,
    0,
  );
  const productsToRestock = productsWithValues.filter(
    (product) => product.quantity <= lowStockThreshold,
  );
  const coffee = productsWithValues.find((product) => product.name === "Kivu coffee");

  console.log(`=== Inventory Report: ${shopName} ===`);
  console.log(`Low-stock threshold: ${lowStockThreshold} units or fewer`);
  console.log("\nProducts in stock:");

  productsWithValues.forEach(displayProduct);

  console.log(`\nTotal inventory value: ${formatCurrency(totalInventoryValue)}`);
  console.log("\nProducts to restock:");

  if (productsToRestock.length === 0) {
    console.log("No products need restocking.");
  } else {
    productsToRestock.forEach((product) => {
      console.log(`- ${product.name}: ${product.quantity} unit(s) in stock`);
    });
  }

  if (coffee) {
    console.log(`\nQuick lookup: ${coffee.name} has ${coffee.quantity} unit(s) in stock.`);
  }
}

displayInventoryReport();
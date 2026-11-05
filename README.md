# Kivu Shop Inventory

This project is a small JavaScript inventory program for a fictional shop in Goma, Democratic Republic of the Congo. It uses products inspired by local commerce, calculates the stock value of each product and the total inventory value, and identifies products that need restocking.

## How to Run

Open `index.html` in a browser, then open the developer tools and select the **Console** tab to view the report.

## Low-Stock Rule

A product needs restocking when **5 units or fewer** remain. This threshold is defined in `script.js` and can be changed to suit the shop.

## JavaScript Concepts

- Variables, numbers, strings, and template literals
- An array of objects to store product records
- Calculations, reusable functions, and `if/else` conditions
- `forEach()` loop to display products
- `map()` to add each product's stock value, `filter()` to identify low-stock items, and `find()` to search for the coffee
- `reduce()` to calculate the total inventory value

Prices are in Congolese francs (CDF). You can change the sample products and quantities in the `products` array in `script.js`.
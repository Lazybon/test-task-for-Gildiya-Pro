import "./styles.scss";
import { categories, products } from "./array";

const tabs = document.getElementById("container");
const productses = document.getElementById("products");
categories.map(({ categoryId, categoryName }) => {
  const newTab = document.createElement("div");
  newTab.addEventListener("click", function() {
    while (productses.firstChild) {
      productses.removeChild(productses.firstChild);
    }
    setCategory(categoryId);
  });
  newTab.innerHTML = categoryName;
  newTab.classList.add("category");
  tabs.appendChild(newTab);
});

function setCategory(category) {
  products
    .filter(({ categoryId }) => categoryId === category)
    .map(({ productName }) => {
      const newProduct = document.createElement("div");
      newProduct.classList.add('product');
      newProduct.innerHTML = productName;
      productses.appendChild(newProduct);
    });
}

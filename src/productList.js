import createRouter from "./router.js";
import data from "../__mocks__/fileMock.js";

const router = createRouter();

export default function productList() {
  const $productList = document.createElement("ul");

  window.addEventListener("click", (event) => {
    if (event.target.matches("[data-product-id]")) {
      const productId = event.target.dataset.productId;
      router.navigate(`/${productId}`);
      event.preventDefault();
    }
  });

  return ($productList.innerHTML = `
      ${data.products
        .map(
          (product) =>
            `
          <li data-product-id=${product.id}>
              <p>${product.title}</p>
              <p>${product.des}</p>
          </li>
        `
        )
        .join("")}`);
}

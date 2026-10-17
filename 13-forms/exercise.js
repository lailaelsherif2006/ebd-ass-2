const items = [];

export function readForm() {
  const name = document.querySelector("#name").value.trim();
  const price = Number(document.querySelector("#price").value);
  return { name, price };
}

export function clearForm() {
  document.querySelector("#name").value = "";
  document.querySelector("#price").value = "";
}

export function renderList(items) {
  const list = document.querySelector("#list");
  list.innerHTML = "";

  for (const item of items) {
    const card = document.createElement("li");
    card.className = "card";

    const heading = document.createElement("h3");
    heading.textContent = item.name;

    const priceTag = document.createElement("p");
    priceTag.className = "price";
    priceTag.textContent = `${item.price} EGP`;

    card.append(heading, priceTag);
    list.append(card);
  }
}

export function wireForm() {
  document
    .querySelector("#product-form")
    .addEventListener("submit", (event) => {
      event.preventDefault();

      const { name, price } = readForm();
      const error = document.querySelector("#error");

      if (name === "") {
        error.textContent = "Give the product a name.";
        return;
      }

      if (!(price > 0)) {
        error.textContent = "Give the product a price.";
        return;
      }

      error.textContent = "";
      items.push({ name, price });
      renderList(items);
      clearForm();
    });
}
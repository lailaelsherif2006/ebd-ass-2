export function productNames(products) {
  return products.map((p) => p.name);
}

export function cheaperThan(products, maxPrice) {
  return products.filter((p) => p.price < maxPrice);
}

export function findById(products, id) {
  return products.find((p) => p.id === id);
}

export function totalPrice(products) {
  return products.reduce((sum, p) => sum + p.price, 0);
}

export function inStockNames(products) {
  return products.filter((p) => p.inStock).map((p) => p.name);
}
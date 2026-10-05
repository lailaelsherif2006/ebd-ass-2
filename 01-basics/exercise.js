// 01-basics — your work goes in this file.

/**
 * Says what type a value is.
 * @param {*} value any value at all
 * @returns {string}
 */
export function describeValue(value) {
  return `${value} is a ${typeof value}`;
}

/**
 * Builds a price label.
 * @param {string} product
 * @param {number} amount in EGP
 * @returns {string}
 */
export function priceLabel(product, amount) {
  return `${product} costs ${amount} EGP`;
}

/**
 * Is this price over 100 EGP?
 * @param {number} amount in EGP
 * @returns {boolean}
 */
export function isExpensive(amount) {
  return amount > 100;
}

/**
 * What shipping costs on an order.
 * Orders over 500 EGP ship free. Everything else costs 50 EGP.
 * @param {number} orderTotal in EGP
 * @returns {number} the shipping cost in EGP
 */
export function shippingCost(orderTotal) {
  if (orderTotal > 500) {
    return 0;
  }
  return 50;
}

/**
 * Describes how much of something is left.
 *   0          -> "Out of stock"
 *   1 to 9     -> "Low stock"
 *   10 or more -> "In stock"
 * @param {number} count how many are left
 * @returns {string}
 */
export function stockLabel(count) {
  if (count === 0) {
    return "Out of stock";
  } else if (count < 10) {
    return "Low stock";
  } else {
    return "In stock";
  }
}
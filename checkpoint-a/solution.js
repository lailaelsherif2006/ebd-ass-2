import { findAllOrders, findOrderById } from "./orders-db.js";

export async function loadOrders() {
  return await findAllOrders();
}

export function myOrders(orders) {
  return orders.filter(
    (order) => order.city === "Cairo" && order.status === "pending"
  );
}

export function summarize(orders) {
  return orders.reduce((total, order) => total + order.quantity, 0);
}

export async function describeOrder(id) {
  try {
    const { item, quantity, student } = await findOrderById(id);
    return `${item} x${quantity} ordered by ${student}`;
  } catch (error) {
    return `Order ${id} not found`;
  }
}

export function toJsonLines(orders) {
  const trimmed = orders.map(({ item, quantity }) => ({ item, quantity }));
  return JSON.stringify(trimmed);
}
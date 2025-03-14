import { getMenu, getOrder } from "./apiRestaurant";

export const menuLoader = async () => {
  const menu = await getMenu();
  return menu;
};

export const previousOrder = async ({ params }) => {
  const order = await getOrder(params.orderId);
  return order;
};

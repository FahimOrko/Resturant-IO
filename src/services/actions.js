import { redirect } from "react-router-dom";
import { createOrder } from "./apiRestaurant";
import store from "../store";
import { clearCart } from "../features/cart/cartSlice";
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

export const createOrderAction = async ({ request }) => {
  //  Get the data from the form sent in the request
  const formData = await request.formData();

  //  Convert the FormData object into a plain JavaScript object
  const data = Object.fromEntries(formData);
  // console.log(data);

  const order = {
    ...data,
    // Parse the cart string into an object (it was likely a JSON string)
    cart: JSON.parse(data.cart),

    priority: data.priority === "true",
  };
  //   console.log(order)

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone = "Please give us a correct phone number";
  if (Object.keys(errors).length > 0) return errors;

  // Call the createOrder function (likely an API request) to save the order on the server
  const newOrder = await createOrder(order);
  // console.log(newOrder);

  store.dispatch(clearCart());

  // After creating the order, redirect the user to the order details page using the order's ID
  // The redirect function takes the user to the path 'order/{id}', where 'id' is the ID of the newly created order

  return redirect(`/order/${newOrder.id}`);
};

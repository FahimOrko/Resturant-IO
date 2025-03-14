import { useState } from "react";
import { Form, useActionData, useNavigation } from "react-router-dom";
import OrderButton from "../../ui/Buttons/OrderButton";
import { useDispatch, useSelector } from "react-redux";
import { getCart, getTotalPrice } from "../cart/cartSlice";
import EmptyCart from "../cart/EmptyCart";
import { formatCurrency } from "../../utils/helpers";
import { fetchAddress } from "../user/userSlice";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const {
    userName,
    status: addressStatus,
    position,
    address,
    error: errorAddress,
  } = useSelector((state) => state.user);
  const isLoading = addressStatus === "loading";

  const navigation = useNavigation();
  const fromErros = useActionData();
  const dispatch = useDispatch();
  // console.log(fromErros);
  const isSubmitting = navigation.state === "submitting";
  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalPrice);
  const priorityPrice = withPriority ? totalCartPrice : totalCartPrice * 0.2;
  const totalPrice = totalCartPrice + priorityPrice;

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>

      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <div className="grow">
            <input
              className="input grow"
              type="text"
              defaultValue={userName}
              name="customer"
              required
            />
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow items-center">
            <input className="input" type="tel" name="phone" required />
            {fromErros?.phone && (
              <p className="mt-2 w-full rounded-full bg-red-50 p-2 text-center text-sm text-red-700">
                {fromErros.phone}
              </p>
            )}
          </div>
        </div>

        <div className="relative mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              className="input"
              type="text"
              name="address"
              defaultValue={address}
              disabled={isLoading}
              required
            />
            {addressStatus === "error" && (
              <p className="mt-2 w-full rounded-full bg-red-50 p-2 text-center text-sm text-red-700">
                {errorAddress}
              </p>
            )}
          </div>
          {!position.latitude && !position.longitude && (
            <span className="absolute right-[3px] top-9 md:top-[3px]">
              <OrderButton
                type="small"
                disabled={isLoading}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(fetchAddress());
                }}
              >
                Get Position
              </OrderButton>
            </span>
          )}
        </div>

        <div className="mb-12 flex items-center gap-4">
          <input
            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input
            type="hidden"
            name="position"
            value={
              position.longitude && position.latitude
                ? `${position.latitude},${position.longitude}`
                : ""
            }
          />
          <OrderButton type="primary" disabled={isSubmitting || isLoading}>
            {isSubmitting
              ? "Placeing a order...."
              : `Order Now for ${formatCurrency(totalPrice)}`}
          </OrderButton>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;

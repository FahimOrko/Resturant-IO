import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
import { getUserName } from "../user/userSlice";
import BackButton from "../../ui/Buttons/BackButton";
import OrderButton from "../../ui/Buttons/OrderButton";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";

function Cart() {
  const dispatch = useDispatch();
  const { userName } = useSelector(getUserName);
  const cart = useSelector(getCart);

  if (!cart.length) return <EmptyCart />;
  return (
    <div className="px-4 py-6">
      <Link to="/menu">
        <BackButton>&larr; Back to menu</BackButton>
      </Link>

      <h2 className="mt-8 text-xl font-semibold">Your cart, {userName}</h2>
      <ul className="mt-3 divide-y divide-stone-400 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-4">
        <Link to="/order/new">
          <OrderButton type="primary">Order pizzas</OrderButton>
        </Link>
        <OrderButton type="secondary" onClick={() => dispatch(clearCart())}>
          Clear Cart
        </OrderButton>
      </div>
    </div>
  );
}

export default Cart;

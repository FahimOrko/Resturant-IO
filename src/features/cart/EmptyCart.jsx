import { Link } from "react-router-dom";
import BackButton from "../../ui/Buttons/BackButton";

function EmptyCart() {
  return (
    <div className="mt-4 space-y-4 px-4 py-2">
      <Link to="/menu">
        <BackButton>&larr; Back to menu</BackButton>
      </Link>

      <p className="font-semibold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;

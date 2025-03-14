import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";
import OrderButton from "../../ui/Buttons/OrderButton";

const UpdateItemQuantity = ({ pizzaId, currentQuantity }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <OrderButton
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        ➖
      </OrderButton>
      <span className="gap-2 text-sm font-medium">{currentQuantity}</span>
      <OrderButton
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        ➕
      </OrderButton>
    </div>
  );
};

export default UpdateItemQuantity;

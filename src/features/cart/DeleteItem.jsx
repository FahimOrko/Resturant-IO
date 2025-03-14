import { useDispatch } from "react-redux";
import OrderButton from "../../ui/Buttons/OrderButton";
import { deleteItem } from "./cartSlice";

const DeleteItem = ({ pizzaId }) => {
  const dispatch = useDispatch();

  return (
    <OrderButton type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
      Delete
    </OrderButton>
  );
};

export default DeleteItem;

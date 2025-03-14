import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import OrderButton from "./Buttons/OrderButton";
import { Link } from "react-router-dom";

function Home() {
  const { userName } = useSelector((state) => state.user);
  return (
    <div className="my-10 px-6 text-center sm:my-16">
      <h1 className="mb-8 text-xl font-semibold text-stone-700 md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {userName === "" ? (
        <CreateUser />
      ) : (
        <Link to="/menu">
          <OrderButton type="primary">
            Continue Ordering, {userName}
          </OrderButton>
        </Link>
      )}
    </div>
  );
}

export default Home;

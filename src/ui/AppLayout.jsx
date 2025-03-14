import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

const AppLayout = () => {
  const navigation = useNavigation();
  // console.log(navigation);
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] bg-stone-200">
      {isLoading && <Loader />}
      {/* {<Loader />} */}

      <Header />
      <div className="overflow-x-auto">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>
      <footer>
        <CartOverview />
      </footer>
    </div>
  );
};

export default AppLayout;

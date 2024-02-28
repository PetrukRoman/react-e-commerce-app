import { Outlet } from "react-router-dom";
import Cart from "../../components/Cart/Cart";
import MainNavigation from "../../components/MainNavigation/MainNavigation";
import Footer from "../../components/Footer/Footer";
import { ScrollRestoration } from "react-router-dom";

const Root = () => {
  return (
    <>
      <ScrollRestoration />
      <Cart />
      <MainNavigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default Root;

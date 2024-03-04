import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createBrowserRouter, Link } from "react-router-dom";
import Root from "./pages/Root/Root";
import HomePage from "./pages/HomePage/HomePage";
import Shop from "./pages/Shop/Shop";
import ProductPage from "./pages/ProductPage/ProductPage";
import { loader as getProductInfo } from "./pages/ProductPage/ProductPage";

import CartPage from "./pages/CartPage/CartPage";
import CheckOutPage from "./pages/CheckoutPage/CheckoutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import NotFoundPage from "./pages/404Page";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <NotFoundPage />,
      handle: {
        crumb: () => (
          <Link to="/" title="Home">
            Home
          </Link>
        ),
      },
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "shop",
          handle: {
            crumb: () => (
              <Link to="/shop" title="Shop">
                Shop
              </Link>
            ),
          },

          children: [
            {
              index: true,
              element: <Shop />,
            },
            {
              path: ":productId",
              element: <ProductPage />,
              loader: getProductInfo,
              handle: {
                crumb: (data) => {
                  return <span>{data.title}</span>;
                },
              },
            },
          ],
        },
        {
          path: "cart",
          element: <CartPage />,
          handle: {
            crumb: () => <span title="Cart">Cart</span>,
          },
        },
        {
          path: "checkout",
          element: <CheckOutPage />,
          handle: {
            crumb: () => <span title="Checkout">Checkout</span>,
          },
        },
        {
          path: "contact",
          element: <ContactPage />,
          handle: {
            crumb: () => <span title="Contact">Contact</span>,
          },
        },
      ],
    },
  ]);
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;

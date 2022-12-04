
// import { Children } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar"
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import "./App.css";
import UserList from "./pages/userList/UserList";
import Series from "./pages/series/Series";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import ProtectedRoute from "./routes/ProtectRoute";
import Layout from "./layout/Layout";
import Factory from "./pages/factory/Factory";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/users",
        element: <UserList />,
      },
      {
        path: "/user/:userId",
        element: <User />,
      },
      {
        path: "/newUser",
        element: <NewUser />,
      },
      {
        path: "/products",
        element: <ProductList />,
      },
      {
        path: "/product/:productId",
        element: <Product />,
      },
      {
        path: "/newproduct",
        element: <NewProduct />,
      },
      {
        path: "/factory",
        element: <Factory />,
      }
        path: "/series",
        element: <Series />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
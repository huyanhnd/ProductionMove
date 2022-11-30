
import { Children } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar"
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import "./App.css";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import { useSelector } from "react-redux";

const Layout = () => {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.user.currentUser);
  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

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
    ],
  },
  {
    path: "/login",
    element: <Login />,
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
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Product from "../pages/Product";
import About from "../pages/About";
import Login from "../pages/Login";
import Signup from "../pages/Signup";


export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },           
      { path: "product", element: <Product /> }, 
      { path: "about", element: <About /> },  
      { path: "login", element: <Login /> }, 
      { path: "signup", element: <Signup /> },   
    ],
  },
];


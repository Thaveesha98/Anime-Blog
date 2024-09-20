import React from "react";
import SignUp from "./pages/signup/SignUp";
import Login from "./pages/login/Login";
import LandingPage from "./pages/landing-page/LandingPage";
import NavBar from "./common/NavBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "./pages/blog-detail/Blog";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <div className="absolute z-10 w-full">
            <NavBar />
          </div>
          <LandingPage />,
        </>
      ),
    },
    {
      path: "/signup",
      element: (
        <>
          <div className="absolute z-10 w-full">
            <NavBar />
          </div>
          <SignUp />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <div className="absolute z-10 w-full">
            <NavBar />
          </div>
          <Login />,
        </>
      ),
    },
    {
      path: "/blog",
      element: (
        <>
          <div className="absolute z-10 w-full">
            <NavBar />
          </div>
          <Blog />,
        </>
      ),
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

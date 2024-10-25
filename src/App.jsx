import { useState } from "react";
import "./App.css";
import { HeaderNav } from "./components/headerNAv.jsx";
import { Footer } from "./components/footer.jsx";
import { Home } from "./pages/home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./pages/errorPage.jsx";
import { About } from "./pages/about.jsx";
import { Housing } from "./pages/housing.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="main-container">
        <HeaderNav />
        <Home />
        <Footer />
      </div>
    ),
    errorElement: (
      <div className="main-container">
        <ErrorPage />,
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div className="main-container">
        <About />,
      </div>
    ),
  },
  {
    path: "/housing",
    element: (
      <div className="main-container">
        <Housing />,
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;

import React from "react";
import "./App.scss";
import { HeaderNav } from "./components/headerNAv/headerNAv.jsx";
import { Footer } from "./components/footer/footer.jsx";
import { Home } from "./pages/home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./pages/errorPage.jsx";
import { About } from "./pages/about.jsx";
import { Housing } from "./pages/housing.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <HeaderNav />
        <Home />
        <Footer />
      </>
    ),
    errorElement: (
      <>
        <ErrorPage />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <About />
      </>
    ),
  },
  {
    path: "/housing/:id",
    element: (
      <>
        <Housing />
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;

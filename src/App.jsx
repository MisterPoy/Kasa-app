import React, { Children } from "react";
import "./App.scss";
import { HeaderNav } from "./components/headerNAv/headerNAv.jsx";
import { Footer } from "./components/footer/footer.jsx";
import { Home } from "./pages/home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./pages/errorPage.jsx";
import { About } from "./pages/about.jsx";
import { Housing } from "./pages/housing.jsx";

// LAYOUT COPONENT FOR HEADER, FOOTER AND MAIN CONTAINER

const Layout = ({ children }) => {
  return (
    <>
      <HeaderNav />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    errorElement: (
      <Layout>
        <ErrorPage />
      </Layout>
    ),
  },
  {
    path: "/about",
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },
  {
    path: "/housing/:id",
    element: (
      <Layout>
        <Housing />
      </Layout>
    ),
    errorElement: (
      <Layout>
        <ErrorPage />
      </Layout>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;

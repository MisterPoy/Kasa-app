import React, { Children } from "react";
import "./app.scss";
import { HeaderNav } from "./components/headerNav/headerNav.jsx";
import { Footer } from "./components/footer/footer.jsx";
import { Home } from "./pages/home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./pages/errorPage.jsx";
import { About } from "./pages/about.jsx";
import { Housing } from "./pages/housing.jsx";

///////// LAYOUT COMPONENT FOR HEADER, FOOTER AND MAIN CONTAINER

const Layout = ({ children }) => {
  return (
    <>
      <HeaderNav />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  );
};

///////// CREATE ROUTEs WITH LAYOUT ELEMENT FOR EACH
const router = createBrowserRouter([
  {
    path: "/", // DEFINE THE ROUTE FOR THE HOME PAGE
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    errorElement: ( // IF A ERROR OCCURS, RENDER THE ERRORPAGE COMPONENT
      <Layout>
        <ErrorPage />
      </Layout>
    ),
  },
  { // ROUTE FOR ABOUT PAGE
    path: "/about",
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },
  { // ROUTE FOR THE DYNAMIC HOUSING PAGE
    path: "/housing/:id",
    element: (
      <Layout>
        <Housing />
      </Layout>
    ),
  },
  {
    path: "/error", // ROUTE FOR THE ERROR PAGE
    element: (
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

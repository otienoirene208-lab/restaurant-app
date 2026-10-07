import { useState } from "react";

import Home from "./Components/Home";
import Menu from "./Components/Menu";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Order from "./Components/Order";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import GetProducts from "./Components/GetProducts";
import AddProducts from "./Components/AddProducts";

import "./App.css";

function App() {
  // Load saved products from localStorage
  const [products, setProducts] = useState(() => {
    try {
      const savedProducts = localStorage.getItem("urbanPlateProducts");

      return savedProducts ? JSON.parse(savedProducts) : [];
    } catch (error) {
      console.error("Could not load saved products:", error);
      return [];
    }
  });

  const [page, setPage] = useState("home");

  // Add a new product
  const handleAddProduct = (newProduct) => {
    const productWithId = {
      ...newProduct,
      id: Date.now(),
    };

    setProducts((currentProducts) => {
      const updatedProducts = [
        ...currentProducts,
        productWithId,
      ];

      // Save products to localStorage
      localStorage.setItem(
        "urbanPlateProducts",
        JSON.stringify(updatedProducts)
      );

      return updatedProducts;
    });

    // Automatically go to Products page
    setPage("getproducts");
  };

  const renderPage = () => {
    switch (page) {
      case "home":
        return <Home />;

      case "menu":
        return <Menu />;

      case "about":
        return <About />;

      case "contact":
        return <Contact />;

      case "order":
        return <Order />;

      case "signin":
        return (
          <SignIn
            onSignIn={() => setPage("home")}
            onGoToSignUp={() => setPage("signup")}
          />
        );

      case "signup":
        return (
          <SignUp
            onSignUp={() => setPage("signin")}
            onGoToSignIn={() => setPage("signin")}
          />
        );

      case "getproducts":
        return (
          <GetProducts
            products={products}
          />
        );

      case "addproducts":
        return (
          <AddProducts
            onAddProduct={handleAddProduct}
          />
        );

      default:
        return <Home />;
    }
  };

  return (
    <div className="restaurant-app">

      {/* NAVBAR */}
      <header className="navbar">

        {/* LOGO */}
        <div
          className="logo"
          onClick={() => setPage("home")}
          role="button"
          tabIndex="0"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setPage("home");
            }
          }}
        >
          <span className="logo-icon">🍴</span>
          <span>Urban Plate</span>
        </div>

        {/* NAVIGATION */}
        <nav>

          <button onClick={() => setPage("home")}>
            Home
          </button>

          <button onClick={() => setPage("menu")}>
            Menu
          </button>

          <button onClick={() => setPage("about")}>
            About
          </button>

          <button onClick={() => setPage("contact")}>
            Contact
          </button>

          <button onClick={() => setPage("getproducts")}>
            Products
          </button>

          <button onClick={() => setPage("signin")}>
            Sign In
          </button>

          <button onClick={() => setPage("signup")}>
            Sign Up
          </button>

          <button
            className="order-btn"
            onClick={() => setPage("order")}
          >
            Order Now
          </button>

        </nav>

      </header>

      {/* PAGE CONTENT */}
      <main>
        {renderPage()}
      </main>

      {/* ADD PRODUCT BUTTON */}
      {page === "getproducts" && (
        <div className="admin-product-links">

          <button
            onClick={() => setPage("addproducts")}
            className="add-product-nav-btn"
          >
            ➕ Add New Product
          </button>

        </div>
      )}

      {/* VIEW PRODUCTS BUTTON */}
      {page === "addproducts" && (
        <div className="admin-product-links">

          <button
            onClick={() => setPage("getproducts")}
            className="view-products-nav-btn"
          >
            🍽️ View Products
          </button>

        </div>
      )}

    </div>
  );
}

export default App;
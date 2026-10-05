
import { useState } from "react";
import "./App.css";

import Home from "./Components/Home";
import Menu from "./Components/Menu";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Order from "./Components/Order";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";

function App() {
  const [page, setPage] = useState("home");

  // When the user successfully signs in
  const handleSignIn = () => {
    setPage("home");
  };

  // When the user wants to go to Sign Up
  const handleGoToSignUp = () => {
    setPage("signup");
  };

  return (
    <div className="restaurant-app">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">

        <div className="logo">
          <span className="logo-icon">🍴</span>
          <span>Urban Plate</span>
        </div>

        <nav>

          <button onClick={() => setPage("home")}>
            Home
          </button>

          <button onClick={() => setPage("menu")}>
            Menu
          </button>

          <button onClick={() => setPage("about")}>
            About Us
          </button>

          <button onClick={() => setPage("contact")}>
            Contact
          </button>

          <button
            className="order-button"
            onClick={() => setPage("order")}
          >
            Order
          </button>

          <button
            className="signin-button"
            onClick={() => setPage("signin")}
          >
            Sign In
          </button>

          <button
            className="signup-button"
            onClick={() => setPage("signup")}
          >
            Sign Up
          </button>

        </nav>

      </header>


      {/* ================= MAIN CONTENT ================= */}

      <main>

        {page === "home" && (
          <Home />
        )}

        {page === "menu" && (
          <Menu />
        )}

        {page === "about" && (
          <About />
        )}

        {page === "contact" && (
          <Contact />
        )}

        {page === "order" && (
          <Order />
        )}

        {page === "signin" && (
          <SignIn
            onSignIn={handleSignIn}
            onGoToSignUp={handleGoToSignUp}
          />
        )}

        {page === "signup" && (
          <SignUp
            onSignIn={() => setPage("signin")}
          />
        )}

      </main>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-content">

          <div className="footer-section">

            <h2>🍴 Urban Plate</h2>

            <p>
              Good food. Good mood.
              Fresh flavors made with love.
            </p>

          </div>


          <div className="footer-section">

            <h3>Quick Links</h3>

            <button onClick={() => setPage("home")}>
              Home
            </button>

            <button onClick={() => setPage("menu")}>
              Menu
            </button>

            <button onClick={() => setPage("about")}>
              About Us
            </button>

            <button onClick={() => setPage("contact")}>
              Contact
            </button>

            <button onClick={() => setPage("order")}>
              Order
            </button>

          </div>


          <div className="footer-section">

            <h3>Contact Us</h3>

            <p>📍 Nairobi, Kenya</p>

            <p>📞 +254 700 000 000</p>

            <p>✉️ info@urbanplate.com</p>

          </div>

        </div>


        <div className="footer-bottom">

          <p>
            © 2026 Urban Plate. All Rights Reserved.
          </p>

        </div>

      </footer>

    </div>
  );
}

export default App;


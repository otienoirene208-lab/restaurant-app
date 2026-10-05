
import { useState } from "react";
import "./SignIn.css";

function SignIn({ onSignIn, onGoToSignUp }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      alert("Please enter your email and password.");
      return;
    }

    const savedUser = localStorage.getItem("urbanPlateAccount");

    if (!savedUser) {
      alert("No account found. Please Sign Up first.");
      return;
    }

    const account = JSON.parse(savedUser);

    if (email === account.email && password === account.password) {
      const loggedInUser = {
        name: account.name,
        email: account.email,
      };

      localStorage.setItem(
        "urbanPlateUser",
        JSON.stringify(loggedInUser)
      );

      alert(`Welcome back, ${account.name}!`);

      if (onSignIn) {
        onSignIn(loggedInUser);
      }
    } else {
      alert("Incorrect email or password.");
    }
  };

  return (
    <div className="signin-page">

      <div className="signin-visual">
        <div className="signin-food-card">
          <div className="signin-food-image">

            <div className="signin-image-overlay"></div>

            <div className="signin-food-content">

              <div className="signin-logo-circle">
                🍴
              </div>

              <span className="signin-small-title">
                WELCOME BACK
              </span>

              <h1>
                Good food.
                <br />
                Good mood.
              </h1>

              <p>
                Your favorite meals are waiting for you.
                Sign in and continue your delicious journey
                with Urban Plate.
              </p>

              <div className="signin-food-icons">
                <span>🍔</span>
                <span>🍕</span>
                <span>🍝</span>
                <span>🥗</span>
              </div>

            </div>
          </div>
        </div>
      </div>


      <div className="signin-form-area">

        <div className="signin-card">

          <div className="signin-heading">
            <span>SIGN IN</span>

            <h2>Welcome Back</h2>

            <p>
              Sign in to your Urban Plate account
              and enjoy your favorite meals.
            </p>
          </div>


          <form onSubmit={handleSubmit}>

            <div className="signin-input-group">

              <label htmlFor="signin-email">
                Email Address
              </label>

              <div className="signin-input-wrapper">

                <span className="input-icon">
                  ✉️
                </span>

                <input
                  id="signin-email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(event) =>
                    setEmail(event.target.value)
                  }
                  autoComplete="email"
                  required
                />

              </div>
            </div>


            <div className="signin-input-group">

              <label htmlFor="signin-password">
                Password
              </label>

              <div className="signin-input-wrapper">

                <span className="input-icon">
                  🔒
                </span>

                <input
                  id="signin-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) =>
                    setPassword(event.target.value)
                  }
                  autoComplete="current-password"
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>

              </div>
            </div>


            <button
              type="submit"
              className="signin-submit"
            >
              Sign In →
            </button>

          </form>


          <div className="signin-bottom">

            <p>
              Don't have an account?
            </p>

            <button
              type="button"
              className="signup-link"
              onClick={onGoToSignUp}
            >
              Create an Account
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default SignIn;


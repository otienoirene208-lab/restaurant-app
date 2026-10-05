
import { useState } from "react";
import "./SignUp.css";

function SignUp({ onSignIn }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Please fill in all fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const userAccount = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
    };

    localStorage.setItem(
      "urbanPlateAccount",
      JSON.stringify(userAccount)
    );

    alert("Account created successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });

    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  return (
    <div className="signup-page">

      <div className="signup-decoration signup-decoration-one"></div>
      <div className="signup-decoration signup-decoration-two"></div>

      {/* LEFT SIDE */}
      <div className="signup-visual">

        <div className="signup-food-card">

          <div className="signup-food-image">
            <div className="signup-image-overlay"></div>

            <div className="signup-food-content">

              <div
                className="signup-logo-circle"
                aria-hidden="true"
              >
                🍴
              </div>

              <span className="signup-small-title">
                JOIN URBAN PLATE
              </span>

              <h1>
                Taste the
                <br />
                difference.
              </h1>

              <p>
                Create your Urban Plate account and discover
                fresh ingredients, unforgettable flavors and
                beautifully prepared meals.
              </p>

              <div
                className="signup-food-icons"
                aria-hidden="true"
              >
                <span>🍔</span>
                <span>🍕</span>
                <span>🍝</span>
                <span>🥗</span>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="signup-form-area">

        <div className="signup-card">

          <div className="signup-heading">

            <span>CREATE ACCOUNT</span>

            <h2>Join Urban Plate</h2>

            <p>
              Create your account and start ordering
              your favorite meals.
            </p>

          </div>

          <form onSubmit={handleSubmit}>

            {/* FULL NAME */}
            <div className="signup-input-group">

              <label htmlFor="signup-name">
                Full Name
              </label>

              <div className="signup-input-wrapper">

                <span
                  className="input-icon"
                  aria-hidden="true"
                >
                  👤
                </span>

                <input
                  id="signup-name"
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                />

              </div>

            </div>

            {/* EMAIL */}
            <div className="signup-input-group">

              <label htmlFor="signup-email">
                Email Address
              </label>

              <div className="signup-input-wrapper">

                <span
                  className="input-icon"
                  aria-hidden="true"
                >
                  ✉️
                </span>

                <input
                  id="signup-email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                />

              </div>

            </div>

            {/* PHONE */}
            <div className="signup-input-group">

              <label htmlFor="signup-phone">
                Phone Number
              </label>

              <div className="signup-input-wrapper">

                <span
                  className="input-icon"
                  aria-hidden="true"
                >
                  📞
                </span>

                <input
                  id="signup-phone"
                  type="tel"
                  name="phone"
                  placeholder="e.g. 011 987 296"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  required
                />

              </div>

            </div>

            {/* PASSWORD */}
            <div className="signup-input-group">

              <label htmlFor="signup-password">
                Password
              </label>

              <div className="signup-input-wrapper">

                <span
                  className="input-icon"
                  aria-hidden="true"
                >
                  🔒
                </span>

                <input
                  id="signup-password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                  title={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>

              </div>

            </div>

            {/* CONFIRM PASSWORD */}
            <div className="signup-input-group">

              <label htmlFor="signup-confirm-password">
                Confirm Password
              </label>

              <div className="signup-input-wrapper">

                <span
                  className="input-icon"
                  aria-hidden="true"
                >
                  🔒
                </span>

                <input
                  id="signup-confirm-password"
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  autoComplete="new-password"
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                  aria-label={
                    showConfirmPassword
                      ? "Hide confirm password"
                      : "Show confirm password"
                  }
                  title={
                    showConfirmPassword
                      ? "Hide confirm password"
                      : "Show confirm password"
                  }
                >
                  {showConfirmPassword ? "🙈" : "👁️"}
                </button>

              </div>

            </div>

            {/* TERMS */}
            <label className="signup-terms">

              <input
                type="checkbox"
                required
              />

              <span>
                I agree to the Terms & Conditions
              </span>

            </label>

            {/* CREATE ACCOUNT */}
            <button
              type="submit"
              className="signup-submit"
            >
              Create Account
              <span aria-hidden="true"> →</span>
            </button>

          </form>

          {/* SIGN IN */}
          <div className="signup-bottom">

            <p>
              Already have an account?
            </p>

            <button
              type="button"
              className="signin-link"
              onClick={onSignIn}
            >
              Sign In
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default SignUp;

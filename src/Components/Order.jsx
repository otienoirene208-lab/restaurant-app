import { useState } from "react";


const menuItems = [
  {
    id: 1,
    name: "Classic Beef Burger",
    price: 850,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Margherita Pizza",
    price: 1200,
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Creamy Chicken Pasta",
    price: 1100,
    image:
      "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Grilled Chicken",
    price: 1300,
    image:
      "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "French Fries",
    price: 350,
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    name: "Chocolate Cake",
    price: 550,
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80",
  },
];

function Order() {
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    notes: "",
  });

  const [payment, setPayment] = useState("M-Pesa");

  const addToOrder = (food) => {
    const existing = cart.find(
      (item) => item.id === food.id
    );

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === food.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...food,
          quantity: 1,
        },
      ]);
    }
  };

  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart(
      cart.filter((item) => item.id !== id)
    );
  };

  const handleCustomerChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const deliveryFee = subtotal > 0 ? 200 : 0;

  const total = subtotal + deliveryFee;

  const totalItems = cart.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Please add at least one meal to your order.");
      return;
    }

    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div className="order-success-page">

        <div className="success-card">

          <div className="success-icon">
            ✓
          </div>

          <p className="success-small">
            ORDER CONFIRMED
          </p>

          <h1>
            Thank You,
            <br />
            <span>{customer.name}!</span>
          </h1>

          <p>
            Your order has been received successfully.
            We are preparing your delicious meal.
          </p>

          <div className="success-details">

            <div>
              <span>Order Items</span>
              <strong>{totalItems}</strong>
            </div>

            <div>
              <span>Payment</span>
              <strong>{payment}</strong>
            </div>

            <div>
              <span>Total</span>
              <strong>
                KSh {total.toLocaleString()}
              </strong>
            </div>

          </div>

          <button
            className="new-order-button"
            onClick={() => {
              setOrderPlaced(false);
              setCart([]);
              setCustomer({
                name: "",
                phone: "",
                email: "",
                address: "",
                notes: "",
              });
            }}
          >
            Place Another Order →
          </button>

        </div>

      </div>
    );
  }

  return (
    <div className="order-page">

      {/* HERO */}
      <section className="order-hero">

        <div className="order-hero-overlay"></div>

        <div className="order-hero-content">

          <p>URBAN PLATE</p>

          <h1>
            Order Your
            <br />
            <span>Favorite Meal.</span>
          </h1>

          <p>
            Choose your favorite meals and let us
            prepare something delicious for you.
          </p>

        </div>

      </section>


      {/* ORDER CONTENT */}
      <section className="order-section">

        {/* MENU */}
        <div className="order-menu">

          <div className="order-heading">
            <p>OUR MENU</p>
            <h2>Choose Your Meal</h2>
            <span>
              Select your favorite food to add it to your order.
            </span>
          </div>


          <div className="order-food-grid">

            {menuItems.map((food) => (

              <div
                className="order-food-card"
                key={food.id}
              >

                <div className="order-food-image">

                  <img
                    src={food.image}
                    alt={food.name}
                  />

                </div>

                <div className="order-food-content">

                  <h3>{food.name}</h3>

                  <div className="order-food-bottom">

                    <strong>
                      KSh {food.price.toLocaleString()}
                    </strong>

                    <button
                      onClick={() =>
                        addToOrder(food)
                      }
                    >
                      + Add
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>


        {/* ORDER SUMMARY */}
        <aside className="order-summary">

          <div className="summary-heading">

            <div>
              <p>YOUR ORDER</p>
              <h2>Order Summary</h2>
            </div>

            <span className="items-badge">
              {totalItems}
            </span>

          </div>


          {cart.length === 0 ? (

            <div className="empty-order">

              <div>🛒</div>

              <h3>Your order is empty</h3>

              <p>
                Select a meal from the menu
                to get started.
              </p>

            </div>

          ) : (

            <>

              <div className="summary-items">

                {cart.map((item) => (

                  <div
                    className="summary-item"
                    key={item.id}
                  >

                    <img
                      src={item.image}
                      alt={item.name}
                    />

                    <div className="summary-item-info">

                      <h4>{item.name}</h4>

                      <strong>
                        KSh{" "}
                        {(
                          item.price *
                          item.quantity
                        ).toLocaleString()}
                      </strong>

                      <div className="summary-quantity">

                        <button
                          onClick={() =>
                            decreaseQuantity(
                              item.id
                            )
                          }
                        >
                          −
                        </button>

                        <span>
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            increaseQuantity(
                              item.id
                            )
                          }
                        >
                          +
                        </button>

                        <button
                          className="remove-button"
                          onClick={() =>
                            removeItem(item.id)
                          }
                        >
                          Remove
                        </button>

                      </div>

                    </div>

                  </div>

                ))}

              </div>


              <div className="price-summary">

                <div>
                  <span>Subtotal</span>
                  <strong>
                    KSh {subtotal.toLocaleString()}
                  </strong>
                </div>

                <div>
                  <span>Delivery Fee</span>
                  <strong>
                    KSh {deliveryFee.toLocaleString()}
                  </strong>
                </div>

                <div className="grand-total">
                  <span>Total</span>
                  <strong>
                    KSh {total.toLocaleString()}
                  </strong>
                </div>

              </div>

            </>

          )}

        </aside>

      </section>


      {/* CUSTOMER INFORMATION */}
      <section className="customer-section">

        <div className="customer-container">

          <div className="customer-heading">

            <p>DELIVERY DETAILS</p>

            <h2>
              Tell Us Where
              <br />
              <span>To Deliver.</span>
            </h2>

            <p>
              Enter your details below so we can
              deliver your order to you.
            </p>

          </div>


          <form
            className="customer-form"
            onSubmit={handleSubmit}
          >

            <div className="form-row">

              <div className="form-group">

                <label>Full Name</label>

                <input
                  type="text"

                  name="name"

                  placeholder="Enter your full name"
                  value={customer.name}

                  onChange={handleCustomerChange}
                  required
                />

              </div>


              <div className="form-group">

                <label>Phone Number</label>

                <input
                  type="tel"

                  name="phone"
                
                  placeholder="e.g. 0111 987 296"
                  value={customer.phone}

                  onChange={handleCustomerChange}
                  required
                />

              </div>

            </div>


            <div className="form-group">

              <label>Email Address</label>

              <input
                type="email"

                name="email"

                placeholder="Enter your email"
                value={customer.email}

                onChange={handleCustomerChange}
                required
              />

            </div>


            <div className="form-group">

              <label>Delivery Address</label>

              <input
                type="text"

                name="address"

                placeholder="Enter your delivery address"
                value={customer.address}

                onChange={handleCustomerChange}
                required
              />

            </div>


            <div className="form-group">

              <label>Special Instructions</label>

              <textarea
                name="notes"

                rows="4"

                placeholder="Any special requests?"
                value={customer.notes}
                
                onChange={handleCustomerChange}
              ></textarea>

            </div>


            {/* PAYMENT */}
            <div className="payment-section">

              <h3>Choose Payment Method</h3>

              <div className="payment-options">

                <label
                  className={
                    payment === "M-Pesa"
                      ? "payment-option active"
                      : "payment-option"
                  }
                >

                  <input
                    type="radio"
                    name="payment"
                    value="M-Pesa"
                    checked={payment === "M-Pesa"}
                    onChange={(e) =>
                      setPayment(e.target.value)
                    }
                  />

                  <span>📱</span>

                  <div>
                    <strong>M-Pesa</strong>
                    <small>Pay with M-Pesa</small>
                  </div>

                </label>


                <label
                  className={
                    payment === "Visa"
                      ? "payment-option active"
                      : "payment-option"
                  }
                >

                  <input
                    type="radio"
                    name="payment"
                    value="Visa"
                    checked={payment === "Visa"}
                    onChange={(e) =>
                      setPayment(e.target.value)
                    }
                  />

                  <span>💳</span>

                  <div>
                    <strong>Visa</strong>
                    <small>Pay with Visa card</small>
                  </div>

                </label>


                <label
                  className={
                    payment === "Mastercard"
                      ? "payment-option active"
                      : "payment-option"
                  }
                >

                  <input
                    type="radio"
                    name="payment"
                    value="Mastercard"
                    checked={
                      payment === "Mastercard"
                    }
                    onChange={(e) =>
                      setPayment(e.target.value)
                    }
                  />

                  <span>💳</span>

                  <div>
                    <strong>Mastercard</strong>
                    <small>
                      Pay with Mastercard
                    </small>
                  </div>

                </label>

              </div>

            </div>


            {/* PLACE ORDER */}
            <button
              type="submit"
              className="place-order-button"
            >
              Place Order
              <span>→</span>
            </button>

          </form>

        </div>

      </section>

    </div>
  );
}

export default Order;
import { useState } from "react";


const foods = [
  {
    id: 1,
    name: "Beef Burger",
    category: "Burgers",
    price: 850,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Chicken Burger",
    category: "Burgers",
    price: 750,
    image:
      "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Margherita Pizza",
    category: "Pizza",
    price: 1200,
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Chicken Pizza",
    category: "Pizza",
    price: 1500,
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Chicken Pasta",
    category: "Pasta",
    price: 1100,
    image:
      "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Italian Pasta",
    category: "Pasta",
    price: 1000,
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    name: "Grilled Chicken",
    category: "Main",
    price: 1300,
    image:
      "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    name: "Beef Steak",
    category: "Main",
    price: 1800,
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    name: "French Fries",
    category: "Sides",
    price: 350,
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    name: "Garden Salad",
    category: "Sides",
    price: 500,
    image:
      "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 11,
    name: "Chocolate Cake",
    category: "Desserts",
    price: 550,
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 12,
    name: "Fruit Bowl",
    category: "Desserts",
    price: 450,
    image:
      "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=800&q=80",
  },
];

const categories = [
  "All",
  "Burgers",
  "Pizza",
  "Pasta",
  "Main",
  "Sides",
  "Desserts",
];

function Menu() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [cart, setCart] = useState([]);

  const filteredFoods = foods.filter((food) => {
    const categoryMatch =
      category === "All" || food.category === category;

    const searchMatch = food.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const minMatch =
      minPrice === "" || food.price >= Number(minPrice);

    const maxMatch =
      maxPrice === "" || food.price <= Number(maxPrice);

    return (
      categoryMatch &&
      searchMatch &&
      minMatch &&
      maxMatch
    );
  });

  const addToCart = (food) => {
    const existingItem = cart.find(
      (item) => item.id === food.id
    );

    if (existingItem) {
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

  const increase = (id) => {
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

  const decrease = (id) => {
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

  const cartItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const clearFilters = () => {
    setCategory("All");
    setSearch("");
    setMinPrice("");
    setMaxPrice("");
  };

  return (
    <div className="menu-page">

      {/* HERO */}
      <header className="menu-header">
        <h1>Our Menu</h1>

        <p>
          Delicious meals made with fresh ingredients
          and served with love.
        </p>
      </header>


      {/* FILTERS */}
      <div className="filters">

        <input
          type="text"
          placeholder="🔍 Search for food..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) =>
            setMinPrice(e.target.value)
          }
        />

        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) =>
            setMaxPrice(e.target.value)
          }
        />

      </div>


      {/* CATEGORIES */}
      <div className="categories">

        {categories.map((item) => (
          <button
            key={item}
            className={
              category === item
                ? "active"
                : ""
            }
            onClick={() =>
              setCategory(item)
            }
          >
            {item}
          </button>
        ))}

      </div>


      {/* FOOD CARDS */}
      <div className="menu-grid">

        {filteredFoods.map((food) => {

          const cartItem = cart.find(
            (item) => item.id === food.id
          );

          const quantity = cartItem
            ? cartItem.quantity
            : 0;

          const itemTotal =
            food.price * quantity;

          return (
            <div
              className="food-card"
              key={food.id}
            >

              <img
                src={food.image}
                alt={food.name}
              />

              <div className="food-info">

                <span>
                  {food.category}
                </span>

                <h2>
                  {food.name}
                </h2>

                <h3>
                  KSh{" "}
                  {food.price.toLocaleString()}
                </h3>


                {/* ADD BUTTON */}
                {quantity === 0 ? (

                  <button
                    className="add-button"
                    onClick={() =>
                      addToCart(food)
                    }
                  >
                    🛒 Add to Cart
                  </button>

                ) : (

                  /* QUANTITY */
                  <div className="quantity">

                    <button
                      onClick={() =>
                        decrease(food.id)
                      }
                    >
                      −
                    </button>

                    <strong>
                      {quantity}
                    </strong>

                    <button
                      onClick={() =>
                        increase(food.id)
                      }
                    >
                      +
                    </button>

                  </div>

                )}


                {/* ITEM TOTAL */}
                {quantity > 0 && (
                  <p className="item-total">
                    {quantity} × KSh{" "}
                    {food.price.toLocaleString()}
                    {" = "}
                    KSh{" "}
                    {itemTotal.toLocaleString()}
                  </p>
                )}

              </div>

            </div>
          );
        })}

      </div>


      {/* NO RESULTS */}
      {filteredFoods.length === 0 && (
        <div className="no-food">

          <h2>
            🍽️ No food found
          </h2>

          <p>
            Try changing your search or
            price range.
          </p>

          <button
            className="add-button"
            onClick={clearFilters}
          >
            Show All Food
          </button>

        </div>
      )}


      {/* CART */}
      {cart.length > 0 && (

        <div className="cart-summary">

          <div>
            <h2>
              🛒 Your Cart
            </h2>

            <p>
              {cartItems} item
              {cartItems !== 1 ? "s" : ""}
            </p>
          </div>

          <div>
            <h2>
              KSh{" "}
              {cartTotal.toLocaleString()}
            </h2>

            <p>
              Total
            </p>
          </div>

          <button>
            Checkout →
          </button>

        </div>

      )}

    </div>
  );
}

export default Menu;
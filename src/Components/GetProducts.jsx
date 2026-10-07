import { useState } from "react";

function GetProducts({ products = [] }) {
  // YOUR ORIGINAL PRODUCTS - KEEPING THE SAME IMAGES
  const originalProducts = [
    {
      id: 1,
      name: "Classic Beef Burger",
      category: "Burgers",
      price: 850,
      rating: 4.9,
      description:
        "Juicy grilled beef, fresh lettuce, tomato, onions and our signature sauce.",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Italian Pizza",
      category: "Pizza",
      price: 1200,
      rating: 4.8,
      description:
        "Freshly baked pizza topped with cheese, tomato sauce and delicious herbs.",
      image:
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Crispy Fried Chicken",
      category: "Chicken",
      price: 750,
      rating: 4.7,
      description:
        "Crispy golden chicken seasoned with our special blend of spices.",
      image:
        "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      name: "Creamy Pasta",
      category: "Pasta",
      price: 950,
      rating: 4.8,
      description:
        "Creamy pasta prepared with fresh herbs, vegetables and parmesan cheese.",
      image:
        "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      name: "Fresh Garden Salad",
      category: "Salads",
      price: 550,
      rating: 4.6,
      description:
        "Fresh lettuce, tomatoes, cucumber, carrots and our homemade dressing.",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      name: "Chocolate Dessert",
      category: "Desserts",
      price: 450,
      rating: 4.9,
      description:
        "Rich and delicious chocolate dessert perfect for finishing your meal.",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 7,
      name: "Delicious Rice Bowl",
      category: "Rice",
      price: 650,
      rating: 4.7,
      description:
        "Fluffy rice served with vegetables and a delicious savory sauce.",
      image:
        "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 8,
      name: "Fresh Fruit Drink",
      category: "Drinks",
      price: 300,
      rating: 4.8,
      description:
        "A refreshing blend of fresh seasonal fruits served chilled.",
      image:
        "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=800&q=80",
    },
  ];

  // Combine the original products with products added from AddProducts
  const allProducts = [...originalProducts, ...products];

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Burgers",
    "Pizza",
    "Chicken",
    "Pasta",
    "Rice",
    "Salads",
    "Desserts",
    "Drinks",
  ];

  // Include categories from newly added products
  const addedCategories = products
    .map((product) => product.category)
    .filter(Boolean);

  const allCategories = [...new Set([...categories, ...addedCategories])];

  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#faf8f5",
        paddingBottom: "60px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* HEADER */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #8b4513, #c97b3b, #f4c39b)",
          color: "white",
          padding: "70px 20px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            marginBottom: "15px",
          }}
        >
          🍽️ Our Products
        </h1>

        <p
          style={{
            fontSize: "19px",
            maxWidth: "700px",
            margin: "auto",
          }}
        >
          Discover delicious meals prepared with fresh ingredients at Urban
          Plate.
        </p>
      </section>

      {/* SEARCH AND FILTER */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "40px auto",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <input
            type="text"
            placeholder="🔍 Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "320px",
              padding: "15px",
              borderRadius: "12px",
              border: "1px solid #ddd",
              fontSize: "16px",
              outline: "none",
            }}
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{
              padding: "15px",
              borderRadius: "12px",
              border: "1px solid #ddd",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            {allCategories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </section>

      {/* PRODUCTS */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "auto",
          padding: "0 20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "32px",
            marginBottom: "35px",
            color: "#3b2920",
          }}
        >
          Our Delicious Menu
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "30px",
          }}
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              style={{
                background: "white",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
              }}
            >
              {/* PRODUCT IMAGE */}
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "22px" }}>
                {/* CATEGORY */}
                <span
                  style={{
                    background: "#f4c39b",
                    color: "#5b3218",
                    padding: "6px 12px",
                    borderRadius: "20px",
                    fontSize: "13px",
                    fontWeight: "bold",
                  }}
                >
                  {product.category}
                </span>

                {/* NAME */}
                <h3
                  style={{
                    fontSize: "23px",
                    color: "#33231c",
                    marginBottom: "10px",
                  }}
                >
                  {product.name}
                </h3>

                {/* DESCRIPTION */}
                <p
                  style={{
                    color: "#666",
                    lineHeight: "1.6",
                  }}
                >
                  {product.description}
                </p>

                {/* PRICE + RATING */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "20px",
                  }}
                >
                  <strong
                    style={{
                      color: "#a0522d",
                      fontSize: "21px",
                    }}
                  >
                    KSh {Number(product.price).toLocaleString()}
                  </strong>

                  <span>
                    ⭐ {product.rating || "New"}
                  </span>
                </div>

                {/* ORDER BUTTON */}
                <button
                  style={{
                    width: "100%",
                    marginTop: "18px",
                    padding: "13px",
                    border: "none",
                    borderRadius: "10px",
                    background: "#8b4513",
                    color: "white",
                    fontSize: "16px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    alert(`${product.name} added to your order!`)
                  }
                >
                  🛒 Order Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* NO PRODUCTS FOUND */}
        {filteredProducts.length === 0 && (
          <p
            style={{
              textAlign: "center",
              fontSize: "20px",
              color: "#777",
              marginTop: "40px",
            }}
          >
            No products found.
          </p>
        )}
      </section>
    </div>
  );
}

export default GetProducts;
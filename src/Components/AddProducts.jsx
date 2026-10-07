
import { useState } from "react";

import "./AddProducts.css";
function AddProducts({ onAddProduct }) {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    rating: "",
    description: "",
    image: "",
    quantity: "",
  });

  const [imagePreview, setImagePreview] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProduct({
      ...product,
      [name]: value,
    });
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    // Make sure the selected file is an image
    if (!file.type.startsWith("image/")) {
      alert("Please select an image file.");
      return;
    }

    // Create a temporary URL for preview
    const imageUrl = URL.createObjectURL(file);

    setImagePreview(imageUrl);

    setProduct({
      ...product,
      image: imageUrl,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !product.name ||
      !product.category ||
      !product.price ||
      !product.description
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    const newProduct = {
      ...product,
      price: Number(product.price),
      rating: Number(product.rating) || 0,
      quantity: Number(product.quantity) || 0,
    };

    if (onAddProduct) {
      onAddProduct(newProduct);
    }

    alert("Product added successfully!");

    // Clear form
    setProduct({
      name: "",
      category: "",
      price: "",
      rating: "",
      description: "",
      image: "",
      quantity: "",
    });

    setImagePreview("");
  };

  const handleClear = () => {
    setProduct({
      name: "",
      category: "",
      price: "",
      rating: "",
      description: "",
      image: "",
      quantity: "",
    });

    setImagePreview("");
  };

  return (
    <div className="add-product-page">
      <div className="add-product-container">

        {/* HEADER */}
        <div className="add-product-header">
          <span className="add-product-icon">🍽️</span>

          <h1>Add New Product</h1>

          <p>
            Add a delicious new meal to your Urban Plate menu.
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="add-product-form">

          {/* FOOD NAME + CATEGORY */}
          <div className="form-row">

            <div className="form-group">
              <label htmlFor="name">
                Food Name *
              </label>

              <input
                type="text"
                id="name"
                name="name"
                value={product.name}
                onChange={handleChange}
                placeholder="e.g. Classic Beef Burger"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="category">
                Category *
              </label>

              <select
                id="category"
                name="category"
                value={product.category}
                onChange={handleChange}
                required
              >
                <option value="">
                  Select category
                </option>

                <option value="Burgers">
                  Burgers
                </option>

                <option value="Pizza">
                  Pizza
                </option>

                <option value="Chicken">
                  Chicken
                </option>

                <option value="Pasta">
                  Pasta
                </option>

                <option value="Rice">
                  Rice
                </option>

                <option value="Salads">
                  Salads
                </option>

                <option value="Desserts">
                  Desserts
                </option>

                <option value="Drinks">
                  Drinks
                </option>
              </select>
            </div>

          </div>

          {/* PRICE + QUANTITY */}
          <div className="form-row">

            <div className="form-group">
              <label htmlFor="price">
                Price (KSh) *
              </label>

              <input
                type="number"
                id="price"
                name="price"
                value={product.price}
                onChange={handleChange}
                placeholder="e.g. 850"
                min="0"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="quantity">
                Quantity Available
              </label>

              <input
                type="number"
                id="quantity"
                name="quantity"
                value={product.quantity}
                onChange={handleChange}
                placeholder="e.g. 20"
                min="0"
              />
            </div>

          </div>

          {/* RATING */}
          <div className="form-group">
            <label htmlFor="rating">
              Rating
            </label>

            <input
              type="number"
              id="rating"
              name="rating"
              value={product.rating}
              onChange={handleChange}
              placeholder="e.g. 4.8"
              min="0"
              max="5"
              step="0.1"
            />
          </div>

          {/* IMAGE UPLOAD */}
          <div className="form-group">

            <label htmlFor="image">
              Food Image
            </label>

            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
            />

            <small className="image-help">
              Choose a JPG, PNG, WEBP or other image from your computer.
            </small>

          </div>

          {/* IMAGE PREVIEW */}
          {imagePreview && (
            <div className="image-preview-container">

              <h3>Image Preview</h3>

              <img
                src={imagePreview}
                alt="Food preview"
                className="image-preview"
              />

            </div>
          )}

          {/* DESCRIPTION */}
          <div className="form-group">

            <label htmlFor="description">
              Description *
            </label>

            <textarea
              id="description"
              name="description"
              value={product.description}
              onChange={handleChange}
              placeholder="Describe the food..."
              rows="5"
              required
            />

          </div>

          {/* BUTTONS */}
          <div className="form-buttons">

            <button
              type="button"
              className="clear-btn"
              onClick={handleClear}
            >
              Clear
            </button>

            <button
              type="submit"
              className="add-btn"
            >
              ➕ Add Product
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}
export default AddProducts;


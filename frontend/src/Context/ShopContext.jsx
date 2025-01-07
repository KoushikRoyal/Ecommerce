import React, { createContext, useState, useEffect } from "react";
import all_product_data from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = (products) => {
  const cart = {};
  products.forEach((product) => {
    cart[product.id] = 0; // Initialize cart with product IDs and quantities as 0
  });
  return cart;
};

const ShopContextProvider = (props) => {
  const [all_product, setAll_Product] = useState([]); // State for all products
  const [cartItems, setCartItems] = useState({}); // State for cart items

  // Load products data (mocking an API call)
  useEffect(() => {
    // Simulate fetching product data and setting state
    setAll_Product(all_product_data);

    // Initialize cartItems when products are loaded
    setCartItems(getDefaultCart(all_product_data));
  }, []);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0, // Prevent negative quantities
    }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      totalItems += cartItems[item];
    }
    return totalItems;
  };

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

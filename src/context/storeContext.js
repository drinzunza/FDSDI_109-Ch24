import React from "react";

// describe the data / functions
// that will be accessible to any component (global)
const store = React.createContext({
  cart: [],
  user: {},

  addProductToCart: () => {},
  removeProductFromCart: () => {},
});

export default store;

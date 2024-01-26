import React from "react";

const cartDataContext = React.createContext({
  totalAmount: 0,
  totalPrice: 0,
  items: [],
  addItemHandler: () => { },
  subItemHandler: () => { },
  claerCartHandler: () => { }
})

export default cartDataContext;
import React from "react";

const cartDataContext = React.createContext({
  totalAmount: 0,
  totalPrice: 0,
  items: [],
  cartDataDispatch: () => { },
})

export default cartDataContext;
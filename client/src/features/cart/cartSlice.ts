import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { Product, CartProduct } from "../../lib/definitions";
import type { RootState } from "../../store";

interface CartState {
  cartItems: Array<CartProduct>;
}

const initialState: CartState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<Product>) => {
      console.log(action.type);
      const itemNew: Product = action.payload;
      const availableItemInCart: number = state.cartItems.findIndex(
        (item) => item.id === itemNew.id
      );
      console.log(availableItemInCart);
      if (availableItemInCart !== -1) {
        state.cartItems[availableItemInCart].quantity += 1;
        state.cartItems[availableItemInCart].totalPrice =
          state.cartItems[availableItemInCart].quantity * itemNew.price;
      } else {
        state.cartItems.push({
          ...itemNew,
          quantity: 1,
          totalPrice: itemNew.price,
        });
      }
      console.log(current(state.cartItems));
    },
  },
});

export const { addItemToCart } = cartSlice.actions;

// Selector
export const selectCartItem = (state: RootState) => state.cart.cartItems;
export const selectCartTotalItem = (state: RootState) =>
  state.cart.cartItems.reduce((total, item) => total + item.quantity, 0);

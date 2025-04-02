import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  images: string[];
}

interface CartState {
  items: CartItem[];
  totalPrice: number;
  discount: number;
  discountCode: string | null;
}

const initialState: CartState = {
  items: [],
  totalPrice: 0,
  discount: 0,
  discountCode: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalPrice = calculateTotal(state.items, state.discount);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.totalPrice = calculateTotal(state.items, state.discount);
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item && action.payload.quantity > 0) {
        item.quantity = action.payload.quantity;
      }
      state.totalPrice = calculateTotal(state.items, state.discount);
    },
    applyDiscount: (state, action: PayloadAction<string>) => {
      const discountCodes: Record<string, number> = {
        SAVE10: 10,
        SAVE20: 20,
      };

      const discount = discountCodes[action.payload] || 0;
      state.discount = discount;
      state.discountCode = discount > 0 ? action.payload : null;
      state.totalPrice = calculateTotal(state.items, state.discount);
    },
    removeDiscount: (state) => {
      state.discount = 0;
      state.discountCode = null;
      state.totalPrice = calculateTotal(state.items, 0);
    },
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

const calculateTotal = (items: CartItem[], discount: number) => {
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return parseFloat((total - (total * discount) / 100).toFixed(2));
};

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  applyDiscount,
  removeDiscount,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;

import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartTotal:[],
    totalAmount: 0, 
  },
  reducers: {
    addCart: (state,actions) =>{
        state.cartTotal.push(actions.payload);
        state.totalAmount = state.cartTotal.reduce((total, item) => {
            const price = parseFloat(item.price) || 0;
            return total + price;
        }
         , 0);

    },

    deleteItem: (state, action) =>{
        const index = action.payload;
        state.cartTotal.splice(index, 1);
        state.totalAmount = state.cartTotal.reduce((total, item) => {
            const price = parseFloat(item.price) || 0;
            return total + price;
        }
         , 0);
    },

    clearAll: (state, action) =>{
        state.cartTotal = [];
        state.totalAmount = 0;
    },
  },
})

// Action creators are generated for each case reducer function
export const { addCart,deleteItem,clearAll } = cartSlice.actions

export default cartSlice.reducer
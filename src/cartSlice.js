import { createSlice } from '@reduxjs/toolkit'

const saveToLocalStorage = (state) => {
    localStorage.setItem('cart', JSON.stringify(state));
  };

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartTotal:[],
    totalAmount: 0, 
    
  },
  reducers: {
    addCart: (state,actions) =>{
        const newItem = actions.payload;
      const existingItemIndex = state.cartTotal.findIndex(item => item.title === newItem.title);

      if (existingItemIndex !== -1) {
        // Nếu mặt hàng đã tồn tại, cập nhật số lượng
        state.cartTotal[existingItemIndex].quantity = (state.cartTotal[existingItemIndex].quantity || 0) + (newItem.quantity || 1);
      } else {
        // Nếu mặt hàng chưa tồn tại, thêm mới vào giỏ hàng
        state.cartTotal.push({ ...newItem, quantity: newItem.quantity || 1 });
      }

      // Cập nhật tổng số tiền
      state.totalAmount = state.cartTotal.reduce((total, item) => {
        const price = parseFloat(item.price) || 0;
        const quantity = parseInt(item.quantity, 10) || 0;
        return total + (price * quantity);
      }, 0);
      saveToLocalStorage(state);
      },
      updateQuantity: (state, actions) => {
        const { title, quantity } = actions.payload;
        const existingItemIndex = state.cartTotal.findIndex(item => item.title === title);
  
        if (existingItemIndex !== -1) {
          // Cập nhật số lượng
          state.cartTotal[existingItemIndex].quantity = quantity;
  
          // Cập nhật tổng số tiền
          state.totalAmount = state.cartTotal.reduce((total, item) => {
            const price = parseFloat(item.price) || 0;
            const quantity = parseInt(item.quantity, 10) || 0;
            return total + (price * quantity);
          }, 0);
        }
        saveToLocalStorage(state);
      },

    deleteItem: (state, action) =>{
        const index = action.payload;
        state.cartTotal.splice(index, 1);
        state.totalAmount = state.cartTotal.reduce((total, item) => {
            const price = parseFloat(item.price) || 0;
            return total + (price * item.quantity);
        }
         , 0);
         saveToLocalStorage(state);
    },

    clearAll: (state, action) =>{
        state.cartTotal = [];
        state.totalAmount = 0;
        saveToLocalStorage(state);
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { addCart,deleteItem,clearAll,updateQuantity } = cartSlice.actions

export default cartSlice.reducer
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

// Hàm để lấy trạng thái từ localStorage
const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('cart');
    if (serializedState === null) {
      return { cart: { cartTotal: [], totalAmount: 0 } }; // Trạng thái mặc định nếu không có dữ liệu
    }
    return { cart: JSON.parse(serializedState) }; // Trạng thái từ localStorage
  } catch (err) {
    console.error('Failed to load state from localStorage', err);
    return { cart: { cartTotal: [], totalAmount: 0 } }; // Trạng thái mặc định trong trường hợp lỗi
  }
};

const store = configureStore({
  reducer: {
    cart: cartReducer, // Đảm bảo reducer tên đúng với cấu hình slice
  },
  preloadedState: loadFromLocalStorage(), // Khôi phục trạng thái từ localStorage
});

// Theo dõi các thay đổi trạng thái và lưu vào localStorage
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('cart', JSON.stringify(state.cart));
});

export default store;

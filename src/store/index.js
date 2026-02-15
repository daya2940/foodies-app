import { configureStore } from '@reduxjs/toolkit';
import mealsReducer from './slices/mealsSlice';
import favoritesReducer from './slices/favoritesSlice';
import cartReducer from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    meals: mealsReducer,
    favorites: favoritesReducer,
    cart: cartReducer,
  },
});

export default store;

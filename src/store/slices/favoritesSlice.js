import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoriteIds: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      if (!state.favoriteIds.includes(action.payload)) {
        state.favoriteIds.push(action.payload);
      }
    },
    removeFromFavorites: (state, action) => {
      state.favoriteIds = state.favoriteIds.filter(id => id !== action.payload);
    },
    toggleFavorite: (state, action) => {
      if (state.favoriteIds.includes(action.payload)) {
        state.favoriteIds = state.favoriteIds.filter(id => id !== action.payload);
      } else {
        state.favoriteIds.push(action.payload);
      }
    },
    clearFavorites: (state) => {
      state.favoriteIds = [];
    },
  },
});

export const { addToFavorites, removeFromFavorites, toggleFavorite, clearFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;

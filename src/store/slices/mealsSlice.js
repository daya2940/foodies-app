import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allMeals: [
    {
      id: 1,
      name: 'Fluffy Pancakes',
      category: 'breakfast',
      icon: '🥞',
      description: 'Golden fluffy pancakes with maple syrup and butter',
      difficulty: 'Easy',
      time: '20 min',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Scrambled Eggs',
      category: 'breakfast',
      icon: '🍳',
      description: 'Creamy scrambled eggs with herbs and toast',
      difficulty: 'Easy',
      time: '10 min',
      rating: 4.5
    },
    {
      id: 3,
      name: 'Greek Salad',
      category: 'lunch',
      icon: '🥗',
      description: 'Fresh vegetables with feta cheese and olive oil dressing',
      difficulty: 'Easy',
      time: '15 min',
      rating: 4.7
    },
    {
      id: 4,
      name: 'Caesar Wrap',
      category: 'lunch',
      icon: '🌯',
      description: 'Grilled chicken wrap with Caesar dressing and fresh veggies',
      difficulty: 'Medium',
      time: '25 min',
      rating: 4.6
    },
    {
      id: 5,
      name: 'Spaghetti Carbonara',
      category: 'dinner',
      icon: '🍝',
      description: 'Classic Italian pasta with creamy sauce and bacon',
      difficulty: 'Medium',
      time: '30 min',
      rating: 4.9
    },
    {
      id: 6,
      name: 'Grilled Salmon',
      category: 'dinner',
      icon: '🐟',
      description: 'Fresh salmon fillet with lemon and asparagus',
      difficulty: 'Medium',
      time: '35 min',
      rating: 4.8
    },
    {
      id: 7,
      name: 'Chocolate Cake',
      category: 'dessert',
      icon: '🍰',
      description: 'Rich, moist chocolate cake with frosting',
      difficulty: 'Hard',
      time: '45 min',
      rating: 4.9
    },
    {
      id: 8,
      name: 'Strawberry Cheesecake',
      category: 'dessert',
      icon: '🍓',
      description: 'Creamy cheesecake with fresh strawberry topping',
      difficulty: 'Hard',
      time: '60 min',
      rating: 4.8
    },
    {
      id: 9,
      name: 'Chocolate Chip Cookies',
      category: 'snacks',
      icon: '🍪',
      description: 'Warm cookies loaded with chocolate chips',
      difficulty: 'Easy',
      time: '25 min',
      rating: 4.7
    },
    {
      id: 10,
      name: 'Hummus & Pita',
      category: 'snacks',
      icon: '🥙',
      description: 'Creamy hummus served with warm pita bread',
      difficulty: 'Easy',
      time: '10 min',
      rating: 4.5
    },
    {
      id: 11,
      name: 'Iced Latte',
      category: 'beverages',
      icon: '☕',
      description: 'Cold espresso with creamy milk and ice',
      difficulty: 'Easy',
      time: '5 min',
      rating: 4.6
    },
    {
      id: 12,
      name: 'Smoothie Bowl',
      category: 'beverages',
      icon: '🥤',
      description: 'Thick berry smoothie topped with granola and fruits',
      difficulty: 'Easy',
      time: '8 min',
      rating: 4.7
    }
  ],
  filter: 'all',
  loading: false,
};

const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    addMeal: (state, action) => {
      state.allMeals.push(action.payload);
    },
    updateMeal: (state, action) => {
      const index = state.allMeals.findIndex(meal => meal.id === action.payload.id);
      if (index !== -1) {
        state.allMeals[index] = action.payload;
      }
    },
    deleteMeal: (state, action) => {
      state.allMeals = state.allMeals.filter(meal => meal.id !== action.payload);
    },
  },
});

export const { setFilter, setLoading, addMeal, updateMeal, deleteMeal } = mealsSlice.actions;
export default mealsSlice.reducer;

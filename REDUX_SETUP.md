# Redux Toolkit Setup Guide

## Overview
This project uses Redux Toolkit for state management. The Redux store is configured with three main slices:
- **Meals**: Manages all meal data and filters
- **Favorites**: Manages user's favorite meals
- **Cart**: Manages shopping cart functionality

## Directory Structure
```
src/
├── store/
│   ├── index.js                 # Store configuration
│   └── slices/
│       ├── mealsSlice.js        # Meals reducer
│       ├── favoritesSlice.js    # Favorites reducer
│       └── cartSlice.js         # Cart reducer
├── providers/
│   └── ReduxProvider.js         # Redux Provider wrapper
└── app/
    └── layout.js                # Root layout with Redux Provider
```

## Store Structure

### 1. Meals Slice
**State:**
- `allMeals`: Array of meal objects
- `filter`: Current category filter ('all' or specific category)
- `loading`: Loading state

**Actions:**
- `setFilter(category)`: Set the current filter
- `setLoading(boolean)`: Set loading state
- `addMeal(meal)`: Add a new meal
- `updateMeal(meal)`: Update existing meal
- `deleteMeal(id)`: Delete a meal

### 2. Favorites Slice
**State:**
- `favoriteIds`: Array of favorited meal IDs

**Actions:**
- `addToFavorites(id)`: Add meal to favorites
- `removeFromFavorites(id)`: Remove meal from favorites
- `toggleFavorite(id)`: Toggle favorite status
- `clearFavorites()`: Clear all favorites

### 3. Cart Slice
**State:**
- `items`: Array of cart items with quantity
- `totalPrice`: Total cart price

**Actions:**
- `addToCart(meal)`: Add item to cart
- `removeFromCart(id)`: Remove item from cart
- `updateQuantity(id, quantity)`: Update item quantity
- `clearCart()`: Clear entire cart

## Usage Example

### Using Redux in Components

```javascript
'use client'

import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '@/store/slices/favoritesSlice';

export default function MealCard({ meal }) {
  const dispatch = useDispatch();
  const favoriteIds = useSelector(state => state.favorites.favoriteIds);
  const isFavorited = favoriteIds.includes(meal.id);

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(meal.id));
  };

  return (
    <button onClick={handleToggleFavorite}>
      {isFavorited ? '❤️ Favorited' : '🤍 Add to Favorites'}
    </button>
  );
}
```

### Accessing State

```javascript
// Get all meals
const allMeals = useSelector(state => state.meals.allMeals);

// Get favorites
const favorites = useSelector(state => state.favorites.favoriteIds);

// Get cart
const cartItems = useSelector(state => state.cart.items);
const totalPrice = useSelector(state => state.cart.totalPrice);

// Get filter
const filter = useSelector(state => state.meals.filter);
```

### Dispatching Actions

```javascript
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/slices/cartSlice';
import { setFilter } from '@/store/slices/mealsSlice';

const dispatch = useDispatch();

// Add to cart
dispatch(addToCart({ id: 1, name: 'Pasta', price: 12.99 }));

// Set filter
dispatch(setFilter('breakfast'));
```

## Installation

Redux Toolkit and react-redux are already installed. If you need to reinstall:

```bash
npm install @reduxjs/toolkit react-redux
```

## Next Steps

You can now:
1. Create custom hooks in `src/hooks/` for common Redux operations
2. Add thunks for async operations if needed
3. Integrate Redux state with your meal, community, and cart components
4. Add Redux DevTools for debugging (optional)

## Redux DevTools Integration (Optional)

To enable Redux DevTools browser extension:

1. Install Redux DevTools browser extension
2. Redux Toolkit automatically configures it in development mode

No additional setup is required!

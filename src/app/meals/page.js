'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import styles from './page.module.css'

const MealsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const mealCategories = [
    { id: 'all', name: 'All Meals', icon: '🍽️' },
    { id: 'breakfast', name: 'Breakfast', icon: '🥞' },
    { id: 'lunch', name: 'Lunch', icon: '🥗' },
    { id: 'dinner', name: 'Dinner', icon: '🍝' },
    { id: 'dessert', name: 'Dessert', icon: '🍰' },
    { id: 'snacks', name: 'Snacks', icon: '🍿' },
    { id: 'beverages', name: 'Beverages', icon: '☕' }
  ];

  const allMeals = [
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
  ];

  const filteredMeals = selectedCategory === 'all' 
    ? allMeals 
    : allMeals.filter(meal => meal.category === selectedCategory);

  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <h1>🍽️ Browse Our Meals</h1>
        <p>Discover delicious recipes from around the world</p>
      </section>

      <section className={styles.filterSection}>
        <h2>Filter by Category</h2>
        <div className={styles.categoryFilter}>
          {mealCategories.map((category) => (
            <button
              key={category.id}
              className={`${styles.categoryBtn} ${selectedCategory === category.id ? styles.active : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <span className={styles.categoryIcon}>{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </section>

      <section className={styles.mealsSection}>
        <div className={styles.mealsCount}>
          Showing {filteredMeals.length} meal{filteredMeals.length !== 1 ? 's' : ''}
        </div>
        <div className={styles.mealsGrid}>
          {filteredMeals.map((meal) => (
            <article key={meal.id} className={styles.mealCard}>
              <div className={styles.mealIcon}>{meal.icon}</div>
              <h3>{meal.name}</h3>
              <p className={styles.description}>{meal.description}</p>
              
              <div className={styles.mealInfo}>
                <span className={styles.difficulty} data-level={meal.difficulty.toLowerCase()}>
                  {meal.difficulty}
                </span>
                <span className={styles.time}>⏱️ {meal.time}</span>
              </div>

              <div className={styles.rating}>
                <span className={styles.stars}>★★★★★</span>
                <span>{meal.rating}</span>
              </div>

              <Link href={`/meals/${meal.id}`} className={styles.viewButton}>
                View Recipe
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.shareSection}>
        <h2>Want to Share Your Recipe?</h2>
        <p>Contribute your favorite dish to our community</p>
        <Link href="/meals/share" className={styles.shareButton}>Share Your Recipe</Link>
      </section>
    </div>
  )
}

export default MealsPage
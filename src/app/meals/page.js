import Link from 'next/link'
import React from 'react'

const MealsPage = () => {
  return (
    <div>
      <p>Meals Page</p>
      <p><Link href="/community">Go to Community</Link></p>
      <p><Link href="/meals/share">Meals Share</Link></p>
      <p><Link href="/meals">Meals</Link></p>
    </div>
  )
}

export default MealsPage
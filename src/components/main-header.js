import Link from 'next/link'
import React from 'react'
import logoImg from '../assets/logo.png';

const MainHeader = () => {
  return (
    <div>
      <header>
        <Link href="/">
          <Image src={logoImg.src} alt="Foody Logo" />
          Next Level Food
        </Link>
      </header>
      <nav>
        <ul>
          <li><Link href="/meals">Browse Meals</Link></li>
          <li><Link href="/community">Foodies community</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default MainHeader
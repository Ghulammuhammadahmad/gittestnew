import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'
import Button from '../ui/Button'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-row">
        <a href="#hero" className="brand">finguard</a>
        <nav className="nav-links">
          <a href="#products">Products</a>
          <a href="#features">Features</a>
          <a href="#benefits">Benefits</a>
          <a href="#partners">Partners</a>
        </nav>
        <Button>Sign up →</Button>
        <button className="mobile-toggle" aria-label="Open menu"><Menu /></button>
      </div>
    </header>
  )
}

export default Navbar

import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import Button from '../ui/Button';

const links = ['Products', 'Features', 'Benefits', 'Partners'];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#" className="logo">finguard</a>
        <nav className="navbar__links">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`}>{link}</a>
          ))}
        </nav>
        <Button className="navbar__cta">Sign up →</Button>
        <button className="navbar__menu" aria-label="Open menu"><Menu size={20} /></button>
      </div>
    </header>
  );
};

export default Navbar;

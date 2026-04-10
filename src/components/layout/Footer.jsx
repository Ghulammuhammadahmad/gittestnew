import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import { footerLinks } from '../../data/footerLinks'

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="socials">
        <Twitter size={18} /><Instagram size={18} /><Linkedin size={18} /><Facebook size={18} />
      </div>
      <div className="footer-grid">
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4>{title}</h4>
            {links.map((link) => <p key={link} className="muted">{link}</p>)}
          </div>
        ))}
      </div>
      <p className="muted" style={{ marginTop: 24 }}>© 2024 Finguard · All Rights Reserved | Terms of Service · Privacy Policy</p>
    </div>
  </footer>
)

export default Footer

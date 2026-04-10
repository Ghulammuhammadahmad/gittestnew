import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { footerLinks } from '../../data/footerLinks';

const social = [Twitter, Instagram, Linkedin, Facebook];

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__socials">
        {social.map((Icon, idx) => (
          <a href="#" key={idx} aria-label="social"><Icon size={18} /></a>
        ))}
      </div>
      <div className="footer__grid">
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4>{title}</h4>
            {links.map((link) => <a href="#" key={link}>{link}</a>)}
          </div>
        ))}
      </div>
      <div className="footer__bottom">
        <p>© 2024 Finguard · All Rights Reserved</p>
        <p>Terms of Service · Privacy Policy</p>
      </div>
    </div>
  </footer>
);

export default Footer;

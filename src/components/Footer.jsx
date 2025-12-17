import facebookIcon from '../assets/facebook-icon.png';
import twitterIcon from '../assets/twitter-icon.png';
import instagramIcon from '../assets/instagram-icon.png';
import linkedinIcon from '../assets/linkedin-icon.png';
import patternBg from '../assets/pattern-bg.png';

function Footer() {
  const navLinks = [
    { label: 'OUR TRACKS', href: '#' },
    { label: 'FIND EVENTS', href: '#' },
    { label: 'TRACK MAP', href: '#' },
    { label: 'SHOP', href: '#' },
    { label: 'ABOUT US', href: '#' },
  ];

  const socialLinks = [
    { icon: facebookIcon, alt: 'Facebook', href: '#' },
    { icon: twitterIcon, alt: 'Twitter', href: '#' },
    { icon: instagramIcon, alt: 'Instagram', href: '#' },
    { icon: linkedinIcon, alt: 'LinkedIn', href: '#' },
  ];

  const footerStyle = {
    backgroundImage: `url(${patternBg})`,
  
    backgroundRepeat: 'repeat',
    backgroundSize: 'auto',
    backgroundBlendMode: 'multiply',
  };

  return (
    <div style={{backgroundColor:"#053024"}}>

    
    <footer className="footer" style={footerStyle}>
      <nav className="footer-nav">
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.label}</a>
              {index < navLinks.length - 1 && <span className="separator">/</span>}
            </li>
          ))}
        </ul>
      </nav>

      <div className="social-links">
        {socialLinks.map((social, index) => (
          <a key={index} href={social.href} className="social-link">
            <img src={social.icon} alt={social.alt} />
          </a>
        ))}
      </div>

      <p className="copyright">&copy; copyright 2020 Adidas</p>
    </footer>
    </div>
  );
}

export default Footer;

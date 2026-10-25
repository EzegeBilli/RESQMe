import { Link } from 'react-router-dom';
import footerLogo from '../assets/footer.png';

const columns = [
  {
    title: 'Company',
    links: [
      { label: 'Home', to: '/' },
      { label: 'About', to: '/about' },
      { label: 'Our Blog', to: '/blog' },
    ],
  },
  {
    title: 'Product',
    links: [
      { label: 'FAQs', href: '/#faq' },
      { label: 'Pricing', to: '/pricing' },
    ],
  },
  {
    title: 'Socials',
    links: [
      { label: 'Instagram', href: 'https://instagram.com/' },
      { label: 'Twitter', href: 'https://twitter.com/' },
    ],
  },
  {
    title: 'Locations',
    links: [
      { label: 'Third Mainland Bridge' },
      { label: 'Ikoyi' },
      { label: 'Lekki' },
      { label: 'Victoria Island' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <Link to="/" className="footer-logo">
          <img src={footerLogo} alt="ResQX - Your Peace of Mind, Our Priority" />
        </Link>

        <div className="footer-columns">
          {columns.map((col) => (
            <div key={col.title} className="footer-col">
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.to ? (
                      <Link to={link.to}>{link.label}</Link>
                    ) : link.href ? (
                      <a href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                        {link.label}
                      </a>
                    ) : (
                      <span>{link.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Send us a mail at <a href="mailto:hello@resqx.com">hello@resqx.com</a>
        </p>
        <small>Copyright 2024 Resqx. All Rights Reserved</small>
      </div>
    </footer>
  );
}
import { Link } from 'react-router-dom';

import './header.css';
import {
  FaPhone,
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaBars,
  FaBarsStaggered,
} from 'react-icons/fa6';
import { useState } from 'react';

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div className="header">
      <div>
        <div className={`header-menu ${menuActive ? 'active' : ''}`}>
          <div className="header-menu-links-container">
            <div className="header-menu-links">
              <Link to="/">
                <div>Головна</div>
              </Link>
              <Link to="/about">
                <div>Про нас</div>
              </Link>
              <Link to="/contact">
                <div>Контакти</div>
              </Link>
            </div>
          </div>
          <div
            onClick={() => setMenuActive(!menuActive)}
            className="header-menu-icon"
          >
            {!menuActive ? <FaBars /> : <FaBarsStaggered />}
          </div>
        </div>
        <div className="header-logo">
          <Link to="/">
            <img src="/logo.png" alt="logo" />
          </Link>
        </div>
      </div>

      <div>
        <div className="header-contacts-text">
          <FaPhone className="header-contacts-text-phone" />
          <div className="header-contacts-text-links">
            <Link to="tel://+38 (067) 688-62-83">
              <b>+38 (067) 688-62-83</b>
            </Link>
            <Link to="mailto:neryhhouse@gmail.com">neryhhouse@gmail.com</Link>
          </div>
        </div>
        <div className="header-contacts-links">
          <Link to="https://facebook.com">
            <FaFacebookF />
          </Link>
          <Link to="https://whatsapp.com">
            <FaWhatsapp />
          </Link>
          <Link to="https://instagram.com">
            <FaInstagram />
          </Link>
          <Link to="https://youtube.com">
            <FaYoutube />
          </Link>
        </div>
      </div>
    </div>
  );
}

import { Link } from 'react-router-dom';

import './footer.css';
import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa6';
import LocationsList from '../neruhomist/locations-list/locations-list';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-columns">
          <div>
            <h3>Меню</h3>
            <ul className="footer-menu">
              <li>
                <Link to="/">Головна</Link>
              </li>
              <li>
                <Link to="/about">Про нас</Link>
              </li>
              <li>
                <Link to="/contact">Контакти</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Місця</h3>
            <LocationsList className="footer-locations-list" />
          </div>
          <div>
            <h3>Наші контакти</h3>
            <ul>
              <li>вул. Мазепи 41, м. Львів, Україна</li>
              <li>
                <Link to="tel://+38 (067) 688-62-83">+38 (067) 688-62-83</Link>
              </li>
              <li>
                <Link to="mailto:neryhhouse@gmail.com">neryhhouse@gmail.com</Link>
              </li>
            </ul>
            <div></div>
          </div>
          <div>
            <h3>Партнери</h3>
            <ul>
              <li>
                <Link to="https://work.ua">Work.ua</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-contacts-links">
          <Link to="https://facebook.com">
            <FaFacebookF /> Facebook
          </Link>
          <Link to="https://whatsapp.com">
            <FaWhatsapp /> WhatsApp
          </Link>
          <Link to="https://instagram.com">
            <FaInstagram /> Instagram
          </Link>
          <Link to="https://youtube.com">
            <FaYoutube /> YouTube
          </Link>
        </div>
        <div className="footer-license-links">
          <Link to="/polityka-konfidenczijnosti">
            Політика конфіденційності
          </Link>
          <Link to="/pravyla-ta-umovy-vykorystannya-sajtu">
            Правила та умови використання сайту
          </Link>
          <Link to="/liczenzijnyj-dogovir">Ліцензійний договір</Link>
        </div>
        <div className="footer-rights">
          © 2024 Агентство Нерухомості. Всі права застережено.
        </div>
      </div>
    </div>
  );
}

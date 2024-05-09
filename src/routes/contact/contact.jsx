import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import MainContainer from '../../components/main-container/main-container';
import WideContainer from '../../components/wide-container/wide-container';
import Container from '../../components/container/container';
import './contact.css';

import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <>
      <Header />
      <MainContainer>
        <WideContainer className="contact-header">
          Контакти агентства нерухомості
        </WideContainer>

        <div className="contact-main-container">
          <Container>
            <p>
              Ми завжди раді допомогти вам у пошуку ідеальної нерухомості або
              відповісти на ваші запитання щодо продажу чи оренди квартир,
              будинків, земельних ділянок та комерції. Залиште свої контактні
              дані у формі нижче або зв’яжіться з нами за нашими контактними
              даними. Наші досвідчені фахівці готові надати вам професійну
              консультацію та допомогти у всіх аспектах ринку нерухомості.
            </p>

            <form className="contact-form">
              <div className="contact-form-2columns">
                <div>
                  <label htmlFor="name">Ім'я</label>
                  <input required type="text" id="name" />
                </div>
                <div>
                  <label htmlFor="phone">Телефон</label>
                  <input required type="tel" id="phone" />
                </div>
              </div>
              <div>
                <label htmlFor="email">Пошта</label>
                <input required type="email" id="email" />
              </div>
              <div>
                <label htmlFor="message">Повідомлення</label>
                <textarea required id="message" />
              </div>
              <div>
                <label htmlFor="argee">Угода GDPR</label>
                <input required type="checkbox" id="argee" /> Я погоджуюся на
                те, щоб цей веб-сайт зберігав надану мною інформацію
              </div>
              <button>Надіслати</button>
            </form>
          </Container>
          <div>
            <Container>
              <p>
                <b>Офіс</b>
              </p>
              <p>Львів, вул. Мазепи 41</p>
              <p>+38 (067) 688-62-83</p>
              <p>neryhhouse@gmail.com</p>
            </Container>
            <div className="contact-links">
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
      </MainContainer>
      <Footer />
    </>
  );
}

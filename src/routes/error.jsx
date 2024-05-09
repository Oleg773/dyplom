import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import MainContainer from '../components/main-container/main-container';
import './error.css';

export default function Error() {
  return (
    <>
      <Header />
      <MainContainer className="error-container">
        <h2>Сторінку не знайдено</h2>
        <p>Перейдіть на головну сторінку</p>
      </MainContainer>
      <Footer />
    </>
  );
}

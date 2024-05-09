import { useEffect, useState } from 'react';
import { getNeruhomostiForMainPage } from '../../api/main';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import MainContainer from '../../components/main-container/main-container';
import CardsNeruhomist from '../../components/neruhomist/cards-neruhomist/cards-neruhomist';
import WideContainer from '../../components/wide-container/wide-container';
import './main.css';
import Container from '../../components/container/container';
import SearchForm from '../../components/search-form/search-from';

export default function Main() {
  const [neruhomosti, setNeruhomosti] = useState([]);

  useEffect(() => {
    setNeruhomosti(getNeruhomostiForMainPage().slice(0, 6));
  }, []);

  return (
    <>
      <Header />
      <MainContainer>
        <WideContainer className="main-header">
          Допоможемо купити нерухомість з вигодою для Вас
        </WideContainer>

        <SearchForm className="main-search-form" />

        <CardsNeruhomist
          neruhomosti={neruhomosti}
          className="main-cards"
          defaultLayout="card"
          showDetails={false}
          rowsForCardLayoutPreset={3}
        />

        <WideContainer className="main-services">
          <h3>
            "Агентство нерухомості 'NeryhOuse' - ваш надійний партнер у справах з
            нерухомістю у Львові та області"
          </h3>
          <p>
            Ласкаво просимо на сайт агентства нерухомості “NeryhOuse” – вашого
            надійного партнера у справах з нерухомістю! Завдяки багаторічному
            досвіду наша компанія гарантує максимально якісні послуги. Ви можете
            зі 100% упевненістю розраховувати на оперативне вирішення
            поставлених завдань, абсолютну фінансову безпеку угод, повноцінне
            кваліфіковане юридичне супроводження та захист Ваших інтересів при
            будь-яких обставинах. Якщо ви шукаєте надійного партнера у справах
            нерухомості у Львові та області, ви знайшли саме те, що потрібно! Ми
            пропонуємо послуги як для покупців/орендарів, так і для власників
            нерухомості.
          </p>

          <div className="main-services-lists">
            <div>
              <h3>Переваги для покупців/орендарів:</h3>
              <ul>
                <li>
                  Широкий вибір нерухомості: Ми маємо доступ до великої бази
                  об’єктів, що забезпечує широкий вибір для вашого ідеального
                  житла чи бізнесу.
                </li>
                <li>
                  Кваліфіковані консультанти: Наші досвідчені ріелтори з радістю
                  допоможуть вам знайти та оцінити нерухомість відповідно до
                  вашого бюджету та потреб.
                </li>
                <li>
                  Юридична підтримка: Ми надаємо повноцінне юридичне
                  супроводження угод, гарантуючи ваші інтереси та безпеку на
                  кожному етапі процесу.
                </li>
                <li>
                  Індивідуальний підхід: Ми розуміємо, що кожен клієнт має свої
                  унікальні потреби, тому пропонуємо індивідуальний підхід для
                  кожного випадку.
                </li>
              </ul>
            </div>

            <div>
              <h3>Переваги для власників нерухомості:</h3>
              <ul>
                <li>
                  Професійна оцінка: Ми допоможемо вам визначити оптимальну
                  вартість вашої нерухомості, враховуючи поточні ринкові
                  тенденції та особливості об’єкта.
                </li>
                <li>
                  Маркетинг і реклама: Ми розробимо ефективну маркетингову
                  стратегію, щоб ваш об’єкт швидко знайшов свого покупця або
                  орендаря.
                </li>
                <li>
                  Економія часу: Ви зможете зосередитись на своїх основних
                  справах, доручивши пошук покупців та орендарів нашим
                  професіоналам.
                </li>
                <li>
                  Юридична безпека: Забезпечуємо правильне оформлення документів
                  та контроль за виконанням умов договорів, що гарантує безпеку
                  вашої нерухомості та фінансів.
                </li>
              </ul>
            </div>
          </div>
        </WideContainer>
      </MainContainer>
      <Footer />
    </>
  );
}

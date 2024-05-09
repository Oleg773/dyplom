import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import MainContainer from '../../components/main-container/main-container';
import WideContainer from '../../components/wide-container/wide-container';
import './about.css';

export default function About() {
  return (
    <>
      <Header />
      <MainContainer className="about-main">
        <WideContainer className="about-header">
          Про агентство нерухомості "NeryhOuse" та нашу команду
        </WideContainer>

        <div className="about-description">
          <h3>
            Знайдіть свою ідеальну нерухомість у Львові з агентством "NeryhOuse" -
            допомогаємо з 2009 року
          </h3>
          <div className="about-2columns">
            <p>
              Агентство нерухомості “NeryhOuse” – це професійна команда спеціалістів,
              яка з 2009 року надає комплексні послуги в сфері нерухомості у
              мальовничому Львові. Завдяки нашому багаторічному досвіду та
              бездоганній репутації, ми з успіхом допомагаємо клієнтам знайти
              свій ідеальний будинок, квартиру або ділянку.
            </p>
            <p>
              В агентстві “NeryhOuse” працюють лише висококваліфіковані спеціалісти,
              які постійно підвищують свою кваліфікацію і слідкують за змінами
              законодавства та ринкових умов. Ми пишаємося тим, що завдяки
              своєму професіоналізму та відповідальному підходу до роботи маємо
              тисячі задоволених клієнтів, які рекомендують нас своїм знайомим
              та друзям.
            </p>
            <p>
              Наші експерти володіють високою кваліфікацією та глибоким знанням
              ринку нерухомості. Вони завжди готові допомогти вам у найкоротший
              термін вирішити будь-які питання, пов’язані з покупкою, продажем,
              орендою або інвестиціями у нерухомість.
            </p>
            <p>
              Наша місія полягає в тому, щоб допомогти нашим клієнтам
              реалізувати свої мрії про власний дім або успішний бізнес в сфері
              нерухомості. Ми розуміємо, що кожен клієнт має свої індивідуальні
              потреби, тому надаємо персоналізований підхід, щоб врахувати всі
              деталі вашого запиту.
            </p>
          </div>
        </div>

        <WideContainer className="about-services">
          <h3>Послуги</h3>
          <p>
            Агентство “NeryhOuse” пропонує різноманітні послуги у сфері ринку житла та
            комерції:
          </p>
          <ul>
            <li>Купівля та продаж будинків, квартир та бізнес-приміщень.</li>
            <li>Оренда житла, офісів та комерційних площ.</li>
            <li>Консультації з правових аспектів угод з нерухомим майном.</li>
            <li>Підбір та оцінка об’єктів для інвестицій.</li>
          </ul>
          <p>
            Агентство надає персоналізований підхід до кожного клієнта та
            допомагає врахувати всі деталі запиту, щоб забезпечити максимально
            комфортний процес купівлі, продажу чи оренди квартир, будинків,
            земельних ділянок або приміщень бід бізнес.
          </p>
        </WideContainer>

        <div className="about-description">
          <h3>Власникам</h3>
          <p>
            Пропонуємо комплексний підхід до обслуговування власників
            нерухомості. Ми надаємо професійні послуги з оцінки, продажу, оренди
            та управління вашою власністю. Завдяки нашому досвіду та глибокому
            розумінню ринку, ми забезпечуємо оптимальні результати для кожного
            клієнта.
          </p>
        </div>

        <div className="about-description-card-container">
          <div className="about-description-card">
            <div>
              <p>Оцінка нерухомості</p>
              <p>
                Наш менеджер приїде на об'єкт, огляне його та визначить
                оптимальну вартість. Він врахує ваше бачення та побажання,
                пояснить, якими факторами обумовлена ціна та як її можна
                скоригувати.
              </p>
            </div>
          </div>
          <div className="about-description-card">
            <div>
              <p>Підготовка презентації</p>
              <p>
                Ми фотографуємо об'єкт, готуємо відеопрезентацію, наші фахівці
                складають описи, а на показах агенти презентують квартиру за
                авторською технологією, яка в рази ефективніше типового показу.
              </p>
            </div>
          </div>
          <div className="about-description-card">
            <div>
              <p>Рекламна кампанія</p>
              <p>
                Ми задіємо більше 70 каналів реклами, в тому числі близько 55
                порталів по нерухомості +3 канала, які є секретом фірми. Для
                порівняння, в невеликих агентствах їх не більше 3-5, а в великих
                мережах, в середньому, 10-12.
              </p>
            </div>
          </div>
          <div className="about-description-card">
            <div>
              <p>Юридичний супровід</p>
              <p>
                У складі агентства нерухомості «NeryhOuse» діє потужний юридичний
                відділ. Правовий напрямок в компанії є одним з ключових.
                Допоможемо врахувати всі нюанси в договорі і зібрати десятки
                довідок і виписок!
              </p>
            </div>
          </div>
        </div>

        <div className="about-description">
          <h3>Покупцям</h3>
          <p>
            Пропонуємо покупцям надійний та ефективний підхід до здійснення угод
            з нерухомістю. Ми допомагаємо вам знайти ідеальний будинок, квартиру
            або комерційну власність, враховуючи всі ваші потреби та бюджет.
            Наша команда експертів завжди готова надати професійну консультацію
            та супроводити вас на всіх етапах покупки нерухомості.
          </p>
        </div>

        <div className="about-description-card-container">
          <div className="about-description-card">
            <div>
              <p>Оцінка нерухомості</p>
              <p>
                Наш менеджер приїде на об'єкт, огляне його та визначить
                оптимальну вартість. Він врахує ваше бачення та побажання,
                пояснить, якими факторами обумовлена ціна та як її можна
                скоригувати.
              </p>
            </div>
          </div>
          <div className="about-description-card">
            <div>
              <p>Підготовка презентації</p>
              <p>
                Ми фотографуємо об'єкт, готуємо відеопрезентацію, наші фахівці
                складають описи, а на показах агенти презентують квартиру за
                авторською технологією, яка в рази ефективніше типового показу.
              </p>
            </div>
          </div>
          <div className="about-description-card">
            <div>
              <p>Рекламна кампанія</p>
              <p>
                Ми задіємо більше 70 каналів реклами, в тому числі близько 55
                порталів по нерухомості +3 канала, які є секретом фірми. Для
                порівняння, в невеликих агентствах їх не більше 3-5, а в великих
                мережах, в середньому, 10-12.
              </p>
            </div>
          </div>
          <div className="about-description-card">
            <div>
              <p>Юридичний супровід</p>
              <p>
                У складі агентства нерухомості «NeryhOuse» діє потужний юридичний
                відділ. Правовий напрямок в компанії є одним з ключових.
                Допоможемо врахувати всі нюанси в договорі і зібрати десятки
                довідок і виписок!
              </p>
            </div>
          </div>
        </div>

        <div className="about-description">
          <h3>Читайте наш блог</h3>
          <p>
            Ознайомлення з ринком нерухомості: вивчайте поради, статті та
            аналітику щодо купівлі, продажу, оренди та інвестицій, а також
            актуальні новини і тренди ринку нерухомості
          </p>
        </div>
      </MainContainer>
      <Footer />
    </>
  );
}
import { useEffect, useState } from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import MainContainer from '../../components/main-container/main-container';
import Container from '../../components/container/container';
import './neruhomist.css';
import {
  getNeruhomistByNameId,
  getSimilarNeruhomistByNameId,
} from '../../api/main';
import Breadcrumb from '../../components/breadcrumb/breadcrumb';
import { neruhomistStatusMap, neruhomistTypeMap } from '../../api/data';
import { useParams } from 'react-router-dom';
import { FaLocationDot, FaCheck } from 'react-icons/fa6';
import NeruhomistTags from '../../components/neruhomist/neruhomist-tags/neruhomist-tags';
import CardsNeruhomist from '../../components/neruhomist/cards-neruhomist/cards-neruhomist';
import PhotosGallery from '../../components/photos-gallery/photos-gallery';

export default function Neruhomist() {
  const { id } = useParams();
  const [neruhomist, setNeruhomist] = useState(null);
  const [similarNeruhomist, setSimilarNeruhomist] = useState(null);
  useEffect(() => {
    setNeruhomist(getNeruhomistByNameId(id));
    setSimilarNeruhomist(getSimilarNeruhomistByNameId(id));
  }, [id]);

  if (!neruhomist) {
    return (
      <>
        <Header />
        <MainContainer></MainContainer>
        <Footer />
      </>
    );
  }
  return (
    <>
      <Header />
      <MainContainer>
        <div className="neruhomist container-2columns">
          <div>
            <Breadcrumb
              items={[
                { link: `/`, name: 'Головна' },
                {
                  link: `/status-neruhomist/${neruhomist.status}`,
                  name: neruhomistStatusMap[neruhomist.status],
                },
                {
                  link: `/vyd-neruhomist/${neruhomist.type}`,
                  name: neruhomistTypeMap[neruhomist.type],
                },
                { name: neruhomist.name },
              ]}
            />
            <h2>{neruhomist.name}</h2>
            <NeruhomistTags
              isRecomended={neruhomist.isRecomended}
              status={neruhomist.status}
            />
            <p>
              <FaLocationDot /> {neruhomist.address}
            </p>
            <PhotosGallery
              photos={neruhomist.photos.map((p) => ({
                src: p,
                alt: `${neruhomist.name}`,
              }))}
              className="neruhomist-gallery"
            />
            <Container className="neruhomist-container">
              <h3>Деталі</h3>
              <hr />
              <ul className="neruhomist-details">
                <li>
                  <div>ID об'єкта:</div>
                  <div>
                    <b>{neruhomist.id}</b>
                  </div>
                </li>
                <li>
                  <div>Ціна:</div>
                  <div>
                    <b>{neruhomist.price}</b>
                  </div>
                </li>
                <li>
                  <div>Розмір нерухомості:</div>
                  <div>
                    <b>{neruhomist.details.area} m²</b>
                  </div>
                </li>
                <li>
                  <div>Вид нерухомості:</div>
                  <div>
                    <b>{neruhomistTypeMap[neruhomist.type]}</b>
                  </div>
                </li>
                <li>
                  <div>Статус нерухомості:</div>
                  <div>
                    <b>{neruhomistStatusMap[neruhomist.status]}</b>
                  </div>
                </li>
                {neruhomist.details.rooms ? (
                  <li>
                    <div>Кімнат:</div>
                    <div>
                      <b>{neruhomist.details.rooms}</b>
                    </div>
                  </li>
                ) : null}
                {neruhomist.details.floor ? (
                  <li>
                    <div>Поверх:</div>
                    <div>
                      <b>{neruhomist.details.floor}</b>
                    </div>
                  </li>
                ) : null}
                {neruhomist.details.floors ? (
                  <li>
                    <div>Поверхів:</div>
                    <div>
                      <b>{neruhomist.details.floors}</b>
                    </div>
                  </li>
                ) : null}
                {neruhomist.details.buildingType ? (
                  <li>
                    <div>Вид будівлі:</div>
                    <div>
                      <b>{neruhomist.details.buildingType}</b>
                    </div>
                  </li>
                ) : null}
                {neruhomist.details.walls ? (
                  <li>
                    <div>Стіни:</div>
                    <div>
                      <b>{neruhomist.details.walls}</b>
                    </div>
                  </li>
                ) : null}
              </ul>
            </Container>

            <Container className="neruhomist-container">
              <h3>Опис</h3>
              <hr />
              <p>{neruhomist.description}</p>
            </Container>

            {neruhomist.features.length > 0 ? (
              <Container className="neruhomist-container">
                <h3>Особливості</h3>
                <hr />
                <ul className="neruhomist-features">
                  {neruhomist.features.map((f) => (
                    <li key={f}>
                      <FaCheck /> {f}
                    </li>
                  ))}
                </ul>
              </Container>
            ) : null}

            <h3>Схожі оголошення</h3>
            <hr />
            <CardsNeruhomist
              neruhomosti={similarNeruhomist}
              defaultLayout="card"
              showDetails={false}
            />
          </div>

          <div>
            <div className="neruhomist-price">
              <b>{neruhomist.price}</b>
            </div>

            <Container className="neruhomist-container neruhomist-tur">
              <h3>Замовити огляд</h3>
              <form className="neruhomist-tur-form">
                <div>
                  <input required type="date" id="date" placeholder="Дата" />
                </div>
                <div>
                  <input required type="time" id="time" placeholder="Час" />
                </div>
                <div>
                  <input required type="text" id="name" placeholder="Ім'я" />
                </div>
                <div>
                  <input required type="tel" id="phone" placeholder="Телефон" />
                </div>
                <div>
                  <input required type="email" id="email" placeholder="Пошта" />
                </div>
                <div>
                  <textarea required id="message" placeholder="Повідомлення" />
                </div>
                <div>
                  <input required type="checkbox" id="argee" />{' '}
                  <label htmlFor="argee">
                    Надсилаючи цю форму, я погоджуюся з умовами використання
                  </label>
                </div>
                <button>Надіслати</button>
              </form>
            </Container>
          </div>
        </div>
      </MainContainer>
      <Footer />
    </>
  );
}

import './card-neruhomist.css';
import Container from '../../container/container';
import NeruhomistTags from '../neruhomist-tags/neruhomist-tags';
import PhotosGallery from '../../photos-gallery/photos-gallery';
import { neruhomistTypeMap } from '../../../api/data';
import {
  FaRulerCombined,
  FaBuilding,
  FaKaaba,
  FaArrowUpShortWide,
  FaBuffer,
  FaFileLines,
  FaTrowelBricks,
} from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export default function CardNeruhomist({ neruhomist, className, layout }) {
  return (
    <Container
      className={`${className ?? ''} card-neruhomist-container card-neruhomist-container-${layout}`}
    >
      <PhotosGallery
        photos={neruhomist.photos.map((p) => ({
          src: p,
          alt: `${neruhomist.name}`,
        }))}
        isMinimal
        link={`/neruhomist/${neruhomist.nameId}`}
        withoutButtons={layout === 'gallery'}
        className="card-neruhomist-gallery"
      />

      <div className="card-neruhomist-details">
        <div className="card-neruhomist-tags">
          <div>
            <NeruhomistTags
              isRecomended={neruhomist.isRecomended}
              status={neruhomist.status}
            />
          </div>
          <div className="card-neruhomist-tags-price">{neruhomist.price}</div>
        </div>
        {layout !== 'gallery' ? (
          <h4>
            <Link to={`/neruhomist/${neruhomist.nameId}`}>
              {neruhomist.name}
            </Link>
          </h4>
        ) : null}
        <p>{neruhomist.address}</p>

        {layout !== 'gallery' ? (
          <ul className="card-neruhomist-list">
            <li>
              <FaRulerCombined /> Розмір нерухомості: {neruhomist.details.area}{' '}
              m²
            </li>
            <li>
              <FaBuilding /> Вид нерухомості:{' '}
              {neruhomistTypeMap[neruhomist.type]}
            </li>
            {neruhomist.details.rooms ? (
              <li>
                <FaKaaba /> Кімнат: {neruhomist.details.rooms}
              </li>
            ) : null}
            {neruhomist.details.floor ? (
              <li>
                <FaArrowUpShortWide /> Поверх: {neruhomist.details.floor}
              </li>
            ) : null}
            {neruhomist.details.floors ? (
              <li>
                <FaBuffer /> Поверхів: {neruhomist.details.floors}
              </li>
            ) : null}
            {neruhomist.details.buildingType ? (
              <li>
                <FaFileLines /> Вид будівлі: {neruhomist.details.buildingType}
              </li>
            ) : null}
            {neruhomist.details.walls ? (
              <li>
                <FaTrowelBricks /> Стіни: {neruhomist.details.walls}
              </li>
            ) : null}
          </ul>
        ) : null}
      </div>
    </Container>
  );
}

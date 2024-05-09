import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  neruhomistLocationMap,
  neruhomistStatusMap,
  neruhomistTypeMap,
} from '../../api/data';
import WideContainer from '../wide-container/wide-container';
import './search-form.css';

export default function SearchForm({ className }) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const searchData = {
    'key-word': searchParams.get('key-word'),
    place: searchParams.get('place'),
    distance: searchParams.get('distance'),
    city: searchParams.get('city'),
    type: searchParams.get('type'),
    status: searchParams.get('status'),
  };

  function handleSumbit(event) {
    event.preventDefault();
    const searchData = {
      'key-word': event.target['key-word'].value,
      place: event.target.place.value,
      distance: event.target.distance.value,
      city: event.target.city.value,
      type: event.target.type.value,
      status: event.target.status.value,
    };

    const link = `/search-neruhomist?${new URLSearchParams(searchData).toString()}`;
    navigate(link);
  }

  return (
    <WideContainer className={`${className ?? ''} container-search-form`}>
      <form className="search-form" onSubmit={handleSumbit}>
        <input
          type="text"
          id="key-word"
          placeholder="Введіть ключове слово"
          defaultValue={searchData['key-word']}
        />
        <input
          type="text"
          id="place"
          placeholder="Місто / Район / Вулицю"
          defaultValue={searchData.place}
        />
        <select
          name="distance"
          id="distance"
          defaultValue={searchData.distance}
        >
          <option value="">--Виберіть радіус--</option>
          <option value="5km">5км</option>
          <option value="10km">10км</option>
          <option value="25km">25км</option>
          <option value="50km">50км</option>
          <option value="100km">100км</option>
        </select>
        <select name="Місце" id="city" defaultValue={searchData.city}>
          <option value="">--Виберіть місце--</option>
          {Object.keys(neruhomistLocationMap).map((loc) => (
            <option key={loc} value={loc}>
              {neruhomistLocationMap[loc]}
            </option>
          ))}
        </select>
        <select name="Тип будівлі" id="type" defaultValue={searchData.type}>
          <option value="">--Виберіть тип--</option>

          {Object.keys(neruhomistTypeMap).map((type) => (
            <option key={type} value={type}>
              {neruhomistTypeMap[type]}
            </option>
          ))}
        </select>
        <select name="Статус" id="status" defaultValue={searchData.status}>
          <option value="">--Виберіть статус--</option>

          {Object.keys(neruhomistStatusMap).map((status) => (
            <option key={status} value={status}>
              {neruhomistStatusMap[status]}
            </option>
          ))}
        </select>
        <button>Пошук</button>
      </form>
    </WideContainer>
  );
}

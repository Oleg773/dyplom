import './locations-list.css';
import { useEffect, useState } from 'react';
import { getLocations } from '../../../api/main';
import List from '../../list/list';
import { neruhomistLocationMap } from '../../../api/data';

export default function LocationsList({ className }) {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    setLocations(getLocations());
  }, []);

  return (
    <List
      className={`${className ?? ''} locations-list`}
      items={locations.map((location) => ({
        link: `/city-neruhomist/${location}`,
        name: neruhomistLocationMap[location],
      }))}
    />
  );
}

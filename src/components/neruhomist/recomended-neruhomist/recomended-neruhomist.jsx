import './recomended-neruhomist.css';
import { useEffect, useState } from 'react';
import CardsNeruhomist from '../cards-neruhomist/cards-neruhomist';
import { getNeruhomostiRecomended } from '../../../api/main';

export default function RecomendedNeruhomist({ className }) {
  const [neruhomosti, setNeruhomosti] = useState([]);

  useEffect(() => {
    setNeruhomosti(getNeruhomostiRecomended());
  }, []);

  return (
    <div className={`${className ?? ''} recomended-neruhomist-container`}>
      <CardsNeruhomist
        neruhomosti={neruhomosti}
        defaultLayout="gallery"
        showDetails={false}
      />
    </div>
  );
}

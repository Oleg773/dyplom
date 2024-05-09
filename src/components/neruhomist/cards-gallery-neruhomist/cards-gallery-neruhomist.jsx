import CardNeruhomist from '../card-neruhomist/card-neruhomist';
import './cards-gallery-neruhomist.css';
import { useState } from 'react';

export default function CardsGalleryNeruhomist({
  neruhomosti,
  className,
  withoutButtons,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  function setSaveCurrentIndex(index) {
    if (index < 0) setSaveCurrentIndex(index + neruhomosti.length);
    else setCurrentIndex(index % neruhomosti.length);
  }
  const currentMain = neruhomosti[currentIndex];

  if (!currentMain) return null;

  return (
    <div className={`${className ?? ''} cards-gallery-neruhomist`}>
      <div className={`cards-gallery-neruhomist-container`}>
        {withoutButtons ? null : (
          <button
            className="cards-gallery-neruhomist-back"
            onClick={() => setSaveCurrentIndex(currentIndex - 1)}
          >
            {'<'}
          </button>
        )}
        <CardNeruhomist neruhomist={currentMain} layout="gallery" />
        {withoutButtons ? null : (
          <button
            className="cards-gallery-neruhomist-forward"
            onClick={() => setSaveCurrentIndex(currentIndex + 1)}
          >
            {'>'}
          </button>
        )}
      </div>
    </div>
  );
}

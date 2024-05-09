import './cards-neruhomist.css';
import CardNeruhomist from '../card-neruhomist/card-neruhomist';
import { useState } from 'react';
import { FaList, FaRegImage, FaTableCellsLarge } from 'react-icons/fa6';
import CardsGalleryNeruhomist from '../cards-gallery-neruhomist/cards-gallery-neruhomist';

export default function CardsNeruhomist({
  neruhomosti,
  className,
  defaultLayout,
  showDetails,
  rowsForCardLayoutPreset,
}) {
  const rowsForCardLayout = rowsForCardLayoutPreset ?? 2;
  const gapCardLayout = (rowsForCardLayout - 1) * 4;
  const [layout, setLayout] = useState(defaultLayout); // card | list | gallery

  return (
    <div className={`${className ?? ''} cards-neruhomist-container`}>
      {showDetails ? (
        <div className="cards-neruhomist-details">
          <div>
            {neruhomosti.length} Об'єкт{neruhomosti.length > 1 ? 'и' : ''}
          </div>
          <CardsLayoutSwitch
            onSwitch={(l) => setLayout(l)}
            currentLayout={layout}
          />
        </div>
      ) : null}
      <div
        className={`cards-neruhomist-layout cards-neruhomist-layout-${layout}`}
        style={
          layout === 'card'
            ? {
                gridTemplateColumns:
                  `${(100 - gapCardLayout) / rowsForCardLayout}% `.repeat(
                    rowsForCardLayout,
                  ),
              }
            : {}
        }
      >
        {layout === 'gallery' ? (
          <CardsGalleryNeruhomist neruhomosti={neruhomosti} />
        ) : (
          neruhomosti.map((neruhomist) => (
            <CardNeruhomist
              key={neruhomist.id}
              neruhomist={neruhomist}
              layout={layout}
            />
          ))
        )}
      </div>
    </div>
  );
}

function CardsLayoutSwitch({ onSwitch, currentLayout }) {
  return (
    <div className="cards-layout-switch">
      <div
        className={currentLayout === 'list' ? 'cards-layout-switch-active' : ''}
        onClick={() => currentLayout !== 'list' && onSwitch('list')}
      >
        <FaList />
      </div>
      <div
        className={currentLayout === 'card' ? 'cards-layout-switch-active' : ''}
        onClick={() => currentLayout !== 'card' && onSwitch('card')}
      >
        <FaTableCellsLarge />
      </div>
      <div
        className={
          currentLayout === 'gallery' ? 'cards-layout-switch-active' : ''
        }
        onClick={() => currentLayout !== 'gallery' && onSwitch('gallery')}
      >
        <FaRegImage />
      </div>
    </div>
  );
}

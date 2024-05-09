import { Link } from 'react-router-dom';
import './photos-gallery.css';
import { useState } from 'react';

const defaultPhoto = {
  src: '/neruhomist-photos/default.png',
  alt: 'default-photo',
};

export default function PhotosGallery({
  photos,
  className,
  isMinimal,
  withoutButtons,
  link,
}) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  function setSaveCurrentIndex(index) {
    if (index < 0) setSaveCurrentIndex(index + photos.length);
    else setCurrentIndex(index % photos.length);
  }
  const currentMain = photos[currentIndex] ?? defaultPhoto;

  const currentMainImage = link ? (
    <Link to={link}>
      <img
        className="photos-gallery-current-image"
        src={currentMain.src}
        alt={currentMain.alt ?? 'gallery-image'}
      />
    </Link>
  ) : (
    <img
      className="photos-gallery-current-image"
      src={currentMain.src}
      alt={currentMain.alt ?? 'gallery-image'}
    />
  );

  // useEffect(() => {
  //   if (ref?.current) {
  //     ref.current.scrollIntoView({ behavior: "instant", block: "start" });
  //   }
  // }, [ref]);

  return (
    <div className={`${className ?? ''} photos-gallery`}>
      <div
        className={`photos-gallery-current-container ${isFullscreen ? 'photos-gallery-full-screen' : ''}`}
      >
        {withoutButtons ? null : (
          <button
            className="photos-gallery-current-back"
            onClick={() => setSaveCurrentIndex(currentIndex - 1)}
          >
            {'<'}
          </button>
        )}
        <div
          className="photos-gallery-current-image-wrapper"
          onDoubleClick={() => setIsFullscreen(!isFullscreen)}
        >
          {currentMainImage}
        </div>
        {withoutButtons ? null : (
          <button
            className="photos-gallery-current-forward"
            onClick={() => setSaveCurrentIndex(currentIndex + 1)}
          >
            {'>'}
          </button>
        )}
      </div>
      {isMinimal ? null : (
        <div className="photos-gallery-preview-container">
          <div className="photos-gallery-preview">
            {photos.map((photo, index) => (
              <img
                key={index + photo.src}
                className={`photos-gallery-preview-image ${index === currentIndex ? 'photos-gallery-preview-image-active' : ''}`}
                src={photo.src}
                alt={photo.alt ?? 'gallery-image'}
                onClick={() => setSaveCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

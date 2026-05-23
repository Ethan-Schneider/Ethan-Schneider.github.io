import React, { useState } from 'react';

// ---------------------------------------------------------------------------
// Gallery subsections
// Add a new object to GALLERY_SECTIONS to create a new subsection.
// Set enabled: false to hide a subsection without deleting it.
//
// To add photos to a section:
//   1. Drop the image file into src/assets/img/gallery/<section-id>/
//   2. Import it at the top of this file:
//        import myPhoto from './assets/img/gallery/travel/paris.jpg';
//   3. Add it to the section's images array:
//        { src: myPhoto, caption: 'Paris, France' }
// ---------------------------------------------------------------------------
const GALLERY_SECTIONS = [
  {
    id: 'travel',
    title: 'Travel',
    enabled: true,
    images: [
      // { src: travelPhoto1, caption: 'Paris, France' },
    ],
  },
  {
    id: 'hobbies',
    title: 'Hobbies & Activities',
    enabled: true,
    images: [
      // { src: hobbyPhoto1, caption: 'Rock climbing at Rocktown' },
    ],
  },
];

function Gallery({ onBack }) {
  const [lightbox, setLightbox] = useState(null); // { src, caption } | null

  const enabledSections = GALLERY_SECTIONS.filter(s => s.enabled);

  return (
    <div className="gallery-page">

      {/* Lightbox overlay */}
      {lightbox && (
        <div className="gallery-lightbox" onClick={() => setLightbox(null)}>
          <button
            className="gallery-lightbox-close"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            &times;
          </button>
          <img src={lightbox.src} alt={lightbox.caption || ''} />
          {lightbox.caption && (
            <p className="gallery-lightbox-caption">{lightbox.caption}</p>
          )}
        </div>
      )}

      <div className="container py-5">

        {/* Page header */}
        <div className="gallery-header mb-5">
          <button onClick={onBack} className="btn btn-outline-dark btn-sm gallery-back-btn">
            &larr; Back
          </button>
          <h1 className="gallery-page-title">Photo Galleries</h1>
        </div>

        {/* Sections */}
        {enabledSections.map(section => (
          <div key={section.id} className="gallery-section mb-5">
            <h2 className="gallery-section-title">{section.title}</h2>
            <hr className="gallery-divider" />

            {section.images.length === 0 ? (
              <p className="gallery-empty">Photos coming soon.</p>
            ) : (
              <div className="row">
                {section.images.map((img, i) => (
                  <div key={i} className="col-6 col-md-4 col-lg-3 mb-3">
                    <div
                      className="gallery-item"
                      onClick={() => setLightbox(img)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={e => e.key === 'Enter' && setLightbox(img)}
                    >
                      <img src={img.src} alt={img.caption || ''} />
                      {img.caption && (
                        <p className="gallery-caption">{img.caption}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

      </div>
    </div>
  );
}

export default Gallery;

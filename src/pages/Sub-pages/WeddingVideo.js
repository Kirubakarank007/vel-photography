import React, { useState } from 'react';
import NavbarComponent from '../../Components/NavbarComponent';
import '../../Styles/Videos.css'; // for styling

const WeddingVideos = () => {
  // Store all video data
  const videos = [
    { id: 'wvnMoCo9np4', title: 'Wedding Video' },
    { id: 'BXm8hm8gzUc', title: 'Baby Video' },
    { id: 'v6vpcp4AF9k', title: 'Maternity Video' },
    { id: 'Avnupt8qBj0', title: 'Pre & Post Wedding Video' },
       { id: 'RFAw9GB1fFo', title: 'Wedding Video' },
    { id: 'fE4YaOiZnbE', title: 'Baby Video' },
    { id: 'e4mEL89ykuE', title: 'Maternity Video' },
    { id: 'KBHZZ7C4ngo', title: 'Pre & Post Wedding Video' },
  ];

  const [hovered, setHovered] = useState(null);

  return (
    <div className="video" style={{ backgroundColor: '#222', padding: '0px' }}>
      <NavbarComponent />
      <h1>Welcome to Wedding Video section</h1>

      <div className="video-grid">
        {videos.map((video, index) => (
          <div
            key={index}
            className="video-item"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            {hovered === index ? (
              <iframe
                src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=0`}
                title={video.title}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            ) : (
              <img
                src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                alt={video.title}
                className="video-thumbnail"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeddingVideos;

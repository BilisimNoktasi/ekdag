import React, { useEffect } from 'react';

interface InstagramEmbedProps {
  url: string; // Gömülecek Instagram gönderisinin URL'si
}

const InstagramEmbed: React.FC<InstagramEmbedProps> = ({ url }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (!window.instgrm) {
        const script = document.createElement('script');
        script.src = 'https://www.instagram.com/embed.js';
        script.async = true;
        document.body.appendChild(script);
      } else {
        window.instgrm.Embeds.process();
      }
    }
  }, []);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={url}
      data-instgrm-version="14"
      style={{
        background: '#FFF',
        border: '0',
        borderRadius: '3px',
        boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
        margin: '1px',
        maxWidth: '640px',
        minWidth: '326px',
        padding: '50px !important',
        width: 'calc(100% - 2px)',
      }}
    />
  );
};

export default InstagramEmbed;


 
import { useState } from "react";

const VideoAbout = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="video-section text-center">
        <div className="background-image" style={{ backgroundImage: `url(/assets/images/resource/video-bg.jpg)` }}></div>
        <div className="container">
          <div className="video-btn">
            <a onClick={() => setIsVideoOpen(true)}
              style={{ cursor: "pointer", zIndex: "99999" }} className="lightbox-image">
              <img src="assets/images/icons/icon-20.png" alt="" /></a>
          </div>
        </div>
      </section>

      {/* Behance video modal */}
      {isVideoOpen && (
        <div
          onClick={() => setIsVideoOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.85)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ position: 'relative', width: '90%', maxWidth: '900px', aspectRatio: '16/9' }}
          >
            <button
              onClick={() => setIsVideoOpen(false)}
              style={{
                position: 'absolute',
                top: '-40px',
                right: '0',
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '32px',
                cursor: 'pointer',
                lineHeight: 1,
              }}
            >
              &times;
            </button>
            <iframe
              src="https://www.behance.net/embed/project/178886957?ilo0=1"
              style={{ width: '100%', height: '100%', border: 'none', borderRadius: '8px' }}
              allowFullScreen
              allow="clipboard-write"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default VideoAbout;
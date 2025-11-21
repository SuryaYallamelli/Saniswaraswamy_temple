import "./GalleryStyles.css";
import image1 from "../../Assets/Images/WhatsApp Image 2025-11-20 at 21.03.16_dd8a878a.jpg";
import image2 from "../../Assets/Images/WhatsApp Image 2025-11-20 at 21.03.18_2ac2d1d5.jpg";
import image3 from "../../Assets/Images/WhatsApp Image 2025-11-20 at 21.03.23_5033e079.jpg";
import image4 from "../../Assets/Images/WhatsApp Image 2025-11-20 at 21.03.31_fed24dfb.jpg";
import image5 from "../../Assets/Images/WhatsApp Image 2025-11-20 at 21.03.32_87f30337.jpg";
import image6 from "../../Assets/Images/WhatsApp Image 2025-11-20 at 21.03.32_a5270cfe.jpg";
import image7 from "../../Assets/Images/WhatsApp Image 2025-11-20 at 21.03.32_c65bbacb.jpg";

import video1 from "../../Assets/Videos/WhatsApp Video 2025-11-20 at 21.02.44_205dd5f6.mp4";
import video2 from "../../Assets/Videos/WhatsApp Video 2025-11-20 at 21.02.53_6a510277.mp4";
import video3 from "../../Assets/Videos/WhatsApp Video 2025-11-20 at 21.02.53_075cd540.mp4";
import video4 from "../../Assets/Videos/WhatsApp Video 2025-11-20 at 21.02.54_761d69e3.mp4";
import video5 from "../../Assets/Videos/WhatsApp Video 2025-11-20 at 21.03.16_e497e41a.mp4";
import video6 from "../../Assets/Videos/WhatsApp Video 2025-11-20 at 21.03.17_2beb219e.mp4";
import video7 from "../../Assets/Videos/WhatsApp Video 2025-11-20 at 21.03.17_acfea125.mp4";
import video8 from "../../Assets/Videos/WhatsApp Video 2025-11-20 at 21.03.17_c2824620.mp4";
import video9 from "../../Assets/Videos/WhatsApp Video 2025-11-20 at 21.03.21_db403a19.mp4";
import video10 from "../../Assets/Videos/WhatsApp Video 2025-11-20 at 21.03.22_2c2310b9.mp4";
import video11 from "../../Assets/Videos/WhatsApp Video 2025-11-20 at 21.03.22_58f992ff.mp4";
import { useState, useEffect } from "react";
const Gallery = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7];

  const videos = [
    video1,
    video2,
    video3,
    video4,
    video5,
    video6,
    video7,
    video8,
    video9,
    video10,
    video11,
  ];
  const [videoThumbs, setVideoThumbs] = useState({});
  const [preview, setPreview] = useState(null); // holds { type: "image"/"video", src: ... }
  // Auto-generate video thumbnails
  const generateThumbnail = (videoSrc) => {
    const vid = document.createElement("video");
    vid.src = videoSrc;
    vid.crossOrigin = "anonymous";
    vid.muted = true;
    vid.currentTime = 0.3;

    vid.addEventListener("loadeddata", () => {
      const canvas = document.createElement("canvas");
      canvas.width = vid.videoWidth;
      canvas.height = vid.videoHeight;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(vid, 0, 0);
      const url = canvas.toDataURL("image/jpeg");

      setVideoThumbs((prev) => ({ ...prev, [videoSrc]: url }));
    });
  };

  useEffect(() => {
    videos.forEach((v) => generateThumbnail(v));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div id="gallery-container">
      <h1 className="gallery-title">Media Gallery</h1>

      {/* -------------------------------- Images -------------------------------- */}
      <h2 className="gallery-section-title">Images</h2>
      <div className="gallery-grid">
        {images.map((src, i) => (
          <div
            className="gallery-item"
            key={i}
            onClick={() => setPreview({ type: "image", src })}
          >
            <img src={src} loading="lazy" alt={`img-${i}`} />
          </div>
        ))}
      </div>

      {/* -------------------------------- Videos -------------------------------- */}
      <h2 className="gallery-section-title">Videos</h2>
      <div className="gallery-grid">
        {videos.map((src, i) => (
          <div
            className="gallery-item gallery-video-thumb"
            key={i}
            onClick={() => setPreview({ type: "video", src })}
          >
            <img
              src={videoThumbs[src]}
              loading="lazy"
              alt={`video-thumb-${i}`}
              className="gallery-video-image"
            />
            <div className="gallery-play-icon">▶</div>
          </div>
        ))}
      </div>

      {/* -------------------------------- Popup Modal -------------------------------- */}
      {preview && (
        <div className="gallery-modal">
          <div className="gallery-modal-content">
            <span
              className="gallery-close-btn"
              onClick={() => setPreview(null)}
            >
              ✕
            </span>

            {/* popup image */}
            {preview.type === "image" && (
              <img
                src={preview.src}
                alt="preview"
                className="gallery-modal-media gallery-modal-media-image"
              />
            )}

            {/* popup video */}
            {preview.type === "video" && (
              <video controls autoPlay className="gallery-modal-media">
                <source src={preview.src} type="video/mp4" />
              </video>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

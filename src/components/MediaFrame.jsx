import { ImagePlus } from 'lucide-react'
import { getImage, getVideo } from '../utils/getImage.js'
import './MediaFrame.css'

// Renders a project/gallery image (or a short looping clip, if `video`
// is passed instead of `image`) when it exists in src/assets/images/ or
// src/assets/videos/, otherwise renders an elegant pastel placeholder so
// the layout still looks intentional before the real file is added.
export default function MediaFrame({
  image,
  video,
  alt = '',
  accent = 'pink',
  className = '',
  rounded = 'lg',
  fit = 'cover',
}) {
  const imgSrc = getImage(image)
  const videoSrc = getVideo(video)

  return (
    <div
      className={`media-frame media-frame--${rounded} media-frame--${accent} media-frame--${fit} ${className}`}
    >
      {videoSrc ? (
        <video
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          aria-label={alt}
        />
      ) : imgSrc ? (
        <img src={imgSrc} alt={alt} loading="lazy" />
      ) : (
        <div className="media-frame__placeholder" role="img" aria-label={alt || 'Project image placeholder'}>
          <ImagePlus className="media-frame__icon" strokeWidth={1.25} aria-hidden="true" />
          <span className="media-frame__filename">{image || video}</span>
        </div>
      )}
    </div>
  )
}

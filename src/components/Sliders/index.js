import React, {useState} from 'react'
import './index.css'
const Sliders = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const images = [
    'https://res.cloudinary.com/dqpacvvei/image/upload/v1756556783/Link_Manuka_Honey_UMF_24___MGO_1122_ieil6w.png',
    'https://res.cloudinary.com/dqpacvvei/image/upload/v1756556795/bbfc340adb505a6e94ea39dd3b54bab5e989edea_lnc6y0.png',
    'https://res.cloudinary.com/dqpacvvei/image/upload/v1756556783/Link_Manuka_Honey_UMF_24___MGO_1122_ieil6w.png',
  ]

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="slider-wrapper">
      <button className="slider-btn" onClick={handlePrev}>
        <img
          src="https://res.cloudinary.com/dqpacvvei/image/upload/v1756558165/Button_-_Previous_slide_SVG_xynaua.png"
          alt="previos"
          className="slider-front-back"
        />
      </button>
      <img
        src={images[currentIndex]}
        alt={`slide-${currentIndex}`}
        className="slider-image"
      />

      <button className="slider-btn" onClick={handleNext}>
        <img
          src="https://res.cloudinary.com/dqpacvvei/image/upload/v1756558216/Button_-_Next_slide_SVG_n7cz4u.png"
          className="slider-front-back"
          alt="next"
        />
      </button>
    </div>
  )
}

export default Sliders

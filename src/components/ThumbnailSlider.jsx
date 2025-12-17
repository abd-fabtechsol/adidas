import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import thumbnailImg from '../assets/thubnail-slider-img.png';
import leftArrow from '../assets/hero-slider-leftt-arrow.png';
import rightArrow from '../assets/hero-slider-right-arrow.png';

function ThumbnailSlider() {
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 600) {
        setSlidesToShow(1);
      } else if (width < 992) {
        setSlidesToShow(2);
      } else if (width < 1200) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const thumbnails = [
    { id: 1, img: thumbnailImg },
    { id: 2, img: thumbnailImg },
    { id: 3, img: thumbnailImg },
    { id: 4, img: thumbnailImg },
    { id: 5, img: thumbnailImg },
    { id: 6, img: thumbnailImg },
    { id: 7, img: thumbnailImg },
    { id: 8, img: thumbnailImg },
  ];

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="thumb-slider-arrow next" onClick={onClick} aria-label="Next thumbnails">
        <img src={rightArrow} alt="Next" />
      </button>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="thumb-slider-arrow prev" onClick={onClick} aria-label="Previous thumbnails">
        <img src={leftArrow} alt="Previous" />
      </button>
    );
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="thumbnail-slider-section">
      <div className="thumbnail-slider-container">
        <Slider {...settings} key={slidesToShow}>
          {thumbnails.map((item, index) => (
            <div key={item.id} className="thumbnail-slide">
              <img src={item.img} alt={`Product ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default ThumbnailSlider;

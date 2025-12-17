import Slider from 'react-slick';
import heroBg from '../assets/hero-bg.png';
import videoThumbnail from '../assets/video-thumbnail-img.png';
import reebokLogo from '../assets/reebok-logo.png';
import playIcon from '../assets/play-icon.png';
import leftArrow from '../assets/hero-slider-leftt-arrow.png';
import rightArrow from '../assets/hero-slider-right-arrow.png';

function HeroSection() {
  const slides = [
    {
      id: 1,
      title: 'GET READY FOR NEW ADIDAS BANDS',
      description: 'Adidas tracks all begin with a starting gate and end with a finish line, but everything in between varies from track to track. Because no two tracks are alike, this action sport keeps you on your toes wherever you are racing.',
      image: videoThumbnail,
    },
    {
      id: 2,
      title: 'EXPERIENCE THE THRILL OF RACING',
      description: 'Feel the adrenaline rush as you navigate through challenging tracks. Our premium gear ensures you stay ahead of the competition with style and comfort.',
      image: videoThumbnail,
    },
    {
      id: 3,
      title: 'JOIN THE ADIDAS COMMUNITY',
      description: 'Connect with fellow racers, share your experiences, and be part of a growing community of passionate athletes who push their limits every day.',
      image: videoThumbnail,
    },
  ];

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="slider-arrow right" onClick={onClick} aria-label="Next slide">
        <img src={rightArrow} alt="Next" />
      </button>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="slider-arrow left" onClick={onClick} aria-label="Previous slide">
        <img src={leftArrow} alt="Previous" />
      </button>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    fade: true,
    cssEase: 'ease-in-out',
  };

  return (
    <section className="hero-section">
      <div className="hero-background">
        <img src={heroBg} alt="Hero Background" />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-top">
          <h2 className="page-title">HOME PAGE</h2>
          <div className="partnership">
            <span>PARTNERSHIP BY</span>
            <img src={reebokLogo} alt="Reebok" />
          </div>
        </div>

        <div className="hero-main">
          <div className="hero-slider">
            <Slider {...settings}>
              {slides.map((slide) => (
                <div key={slide.id}>
                  <div className="slide-inner">
                    <div className="hero-text">
                      <h1>{slide.title}</h1>
                      <p>{slide.description}</p>
                    </div>
                    <div className="hero-video">
                      <img src={slide.image} alt="Video Thumbnail" className="video-thumbnail" />
                      <button className="play-button" aria-label="Play video">
                        <img src={playIcon} alt="Play" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

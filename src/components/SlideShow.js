/* eslint-disable react/jsx-props-no-spreading */
import Slider from 'react-slick';
import Projects from './Projects';
import ProjectDetail from './ProjectDetail';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../stylesheets/slide.css';

function SlideShow() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider {...settings}>
        {Projects.map((card) => (
          <div key="1">
            <h3>{card.title}</h3>
            <img src={card.image} alt="img" />
            <button type="button">View</button>
          </div>
        ))}
      </Slider>
      <ProjectDetail />
    </>
  );
}

export default SlideShow;

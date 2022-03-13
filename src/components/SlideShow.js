/* eslint-disable react/jsx-props-no-spreading */
import Slider from 'react-slick';
import { useState } from 'react';
import Projects from './Projects';
import ProjectDetail from './ProjectDetail';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../stylesheets/slide.css';
import { applyBlur, restorBlur } from './Blurring';

function SlideShow() {
  const [modal, setModal] = useState('closed');
  const [selectedProject, setSelectedProject] = useState();
  const handleModal = (modalState, card) => {
    setModal(modalState);
    setSelectedProject(card);
    if (modalState === 'open') {
      applyBlur();
    } else restorBlur();
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 520, // mobile
        settings: {
          dots: true,
          infinite: true,
          speed: 700,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 850, // tablet
        settings: {
          dots: true,
          infinite: true,
          speed: 700,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 980, // l-tablet
        settings: {
          dots: true,
          infinite: true,
          speed: 700,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <h2 className="recent-projects-header">My recent projects</h2>
      <Slider {...settings}>
        {Projects.map((card) => (
          <div key="1">
            <h3>{card.title}</h3>
            <img src={card.image} alt="img" />
            <button className="view-prjct-btn" type="button" onClick={() => handleModal('open', card)}>View</button>
          </div>
        ))}
      </Slider>
      <ProjectDetail modal={modal} selectedProject={selectedProject} handleModal={handleModal} />
      <div className="seperator" />
    </>
  );
}

export default SlideShow;

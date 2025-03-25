import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Technologies.css';

function Technologies() {
  const techSkills = [
    { name: 'HTML5', icon: 'fab fa-html5' },
    { name: 'CSS3', icon: 'fab fa-css3-alt' },
    { name: 'JavaScript', icon: 'fab fa-js' },
    { name: 'React', icon: 'fab fa-react' },
    { name: 'Node.js', icon: 'fab fa-node-js' },
    { name: 'Git', icon: 'fab fa-git' },
    { name: 'Python', icon: 'fab fa-python' },
    { name: 'MongoDB', imgSrc: 'https://simpleicons.org/icons/mongodb.svg' },
    { name: 'MySQL', imgSrc: 'https://simpleicons.org/icons/mysql.svg' }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }
    ]
  };

  return (
    <section id="technologies" className="tech-section">
      <div className="container">
        <h2>Technologies I Know</h2>
        <Slider {...settings}>
          {techSkills.map((skill, index) => (
            <div className="tech-item" key={index}>
              {skill.icon ? (
                <i className={skill.icon} title={skill.name}></i>
              ) : (
                <img src={skill.imgSrc} alt={skill.name} title={skill.name} />
              )}
              <div className="tech-name">{skill.name}</div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Technologies; 
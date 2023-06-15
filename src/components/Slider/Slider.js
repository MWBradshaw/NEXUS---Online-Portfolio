import Carousel from 'react-bootstrap/Carousel';
import styles from './Slider.module.css';

function Slider({ slides }) {
  return (
    <>
    <Carousel indicators={false}>
        {slides.map((slide) => (
            <Carousel.Item key={slide.image}>
                <img
                className={styles.carouselImage}
                src={slide.image}
                alt="First slide"
                />
            </Carousel.Item>
      ))}
    </Carousel>


    </>
  );
}

export default Slider;
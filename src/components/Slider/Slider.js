import Carousel from 'react-bootstrap/Carousel';
import styles from './Slider.module.css';

function Slider({ slides }) {
  return (
    <>
    <div className={styles.innerContainer1}>
        <div className={styles.innerContainer1Body}>
            <div className={styles.slideHeader1}>
                <h2>Relevant Courses</h2>
            </div>
            <p>Course Name: slide.</p>
            <p>Grade:</p>
        </div>
      </div>

    <Carousel indicators={false}>
        {slides.map((slide) => (
            <Carousel.Item key={slide.image}>
                <img
                className={styles.carouselImage}
                src={slide.image}
                alt="First slide"
                />

                <div className={styles.innerContainer1}>
                        <div className={styles.innerContainer1Body}>
                            <div className={styles.slideHeader1}>
                                <h2>Relevant Courses</h2>
                            </div>
                            <p>Course Name: {slide.relevantCourse}</p>
                            <p>Grade: {slide.grade}</p>
                        </div>
                </div>
            </Carousel.Item>
      ))}
    </Carousel>
    </>
  );
}

export default Slider;
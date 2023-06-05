import styles from './WorkExperience.module.css';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';

const WorkExperience = () => {
    // const [index, setIndex] = useState(0);

    // const handleSelect = (selectedIndex) => {
    //     setIndex(selectedIndex);
    // };

    return (
        <div className={styles.container}>
            <section className={styles.one}>
                {/* <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="src/assets/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        
                    </Carousel.Item>
                </Carousel> */}

                <div className={styles.innerContainer1}>
                    <div className={styles.innerContainer1Body}>
                        <div className={styles.slideHeader1}>
                            <h2>Relevant Courses</h2>
                        </div>
                        <p>Course Name:</p>
                        <p>Grade:</p>
                    </div>
                </div>
            </section>

            
            <section className={styles.two}>
                <div className={styles.innerContainer2}>
                    
                </div>
                <div className={styles.slideHeader}>
                    <h2>Technical</h2>
                    <h2>Skills</h2>
                </div>
            </section>
                

            <section className={styles.three}>
                <div className={styles.slideHeader3}>
                    <h2>Work</h2>
                    <h2>Experience</h2>
                </div>
                <div className={styles.innerContainer}>
                    
                </div>
            </section>
        </div>
    );
}

export default WorkExperience;
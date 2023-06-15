import styles from './WorkExperience.module.css';
import Slider from '../../components/Slider/Slider';
import slides from '../../slides.json'
// import { useState } from 'react';
// import placeholder from "../../assets/placeholder.jpg";

const WorkExperience = () => {
    // const [index, setIndex] = useState(0);

    // const handleSelect = (selectedIndex) => {
    //     setIndex(selectedIndex);
    // };

    const relevantCourseList = [['Fundamentals of Programming', 'A'], 
    ['Discrete Mathematics', 'A'], 
    ['Introduction to Object Oriented Programming', 'A'], 
    ['Calculus', 'B'], 
    ['Data Structures & Algorithms', 'B'], 
    ['Computer Organization & Architecture', 'A'], 
    ['Calculus II', 'A'],
     ['Computer Systems', 'A']]

    return (
        <div className={styles.container}>
            <section className={styles.one}>
                <Slider slides={slides}/>

                <div className={styles.innerContainer1}>
                    <div className={styles.innerContainer1Body}>
                        <div className={styles.slideHeader1}>
                            <h2>Relevant Courses</h2>
                        </div>
                        <p>Course Name: {relevantCourseList[0][0]}</p>
                        <p>Grade: {relevantCourseList[0][1]}</p>
                    </div>
                </div>
            </section>

            
            <section className={styles.two}>
                <div className={styles.innerContainer2}>
                    
                </div>
                <div className={styles.slideHeader2}>
                    <h2>Technical Skills</h2>
                </div>
            </section>
                

            <section className={styles.three}>
                <div className={styles.slideHeader3}>
                    <h2>Work Experience</h2>
                </div>
                <div className={styles.innerContainer}>
                    
                </div>
            </section>
        </div>
    );
}

export default WorkExperience;
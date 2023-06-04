import styles from './WorkExperience.module.css';

const WorkExperience = () => {
    return (
        <div className={styles.container}>
            <section className={styles.one}>
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
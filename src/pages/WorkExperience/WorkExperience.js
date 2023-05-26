import styles from './WorkExperience.module.css';

const WorkExperience = () => {
    return (
        <div>
            <section>
                <div className="one">
                    <h3>Relevant Courses</h3>
                </div>
            </section>

            <section className="two">
                <div className={styles.skillHeader}>
                    <h3>Technical Skills</h3>
                </div>
            </section>
                

            <section className="three">
                <div>
                    <h3>Work Experience</h3>
                </div>
            </section>
        </div>
    );
}

export default WorkExperience;
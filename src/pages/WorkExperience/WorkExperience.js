import styles from './WorkExperience.module.css';

const WorkExperience = () => {
    return (
        <div className={styles.container}>
            <section className={styles.one}>
                <div className={styles.slideHeader}>
                    <h2>Relevant</h2>
                    <h2>Courses</h2>
                </div>
                <div>

                </div>
            </section>

            <section className={styles.two}>
                <div className={styles.slideHeader}>
                    <h2>Technical</h2>
                    <h2>Skills</h2>
                </div>
                <div className={styles.innerContainer}>
                    <div className={styles.skillBox}>
                        <span className={styles.skillTitle}>HTML5</span>
                        <div className={styles.skillBar}>
                            <span className={styles.skillPercentHTML}>
                                <span className={styles.tooltip}>%</span> 
                            </span>
                        </div>
                    </div>

                    <div className={styles.skillBox}>
                        <span className={styles.skillTitle}>CSS3</span>
                        <div className={styles.skillBar}>
                            <span className={styles.skillPercentCSS}>
                                <span className={styles.tooltip}>%</span> 
                            </span>
                        </div>
                    </div>

                    <div className={styles.skillBox}>
                        <span className={styles.skillTitle}>JavaScript</span>
                        <div className={styles.skillBar}>
                            <span className={styles.skillPercentJavaScript}>
                                <span className={styles.tooltip}>%</span> 
                            </span>
                        </div>
                    </div>

                    <div className={styles.skillBox}>
                        <span className={styles.skillTitle}>Python</span>
                        <div className={styles.skillBar}>
                            <span className={styles.skillPercentPython}>
                                <span className={styles.tooltip}>%</span> 
                            </span>
                        </div>
                    </div>

                    <div className={styles.skillBox}>
                        <span className={styles.skillTitle}>Java</span>
                        <div className={styles.skillBar}>
                            <span className={styles.skillPercentJava}>
                                <span className={styles.tooltip}>%</span> 
                            </span>
                        </div>
                    </div>

                    <div className={styles.skillBox}>
                        <span className={styles.skillTitle}>ReactJS</span>
                        <div className={styles.skillBar}>
                            <span className={styles.skillPercentReactJS}>
                                <span className={styles.tooltip}>%</span> 
                            </span>
                        </div>
                    </div>

                    <div className={styles.skillBox}>
                        <span className={styles.skillTitle}>Bootstrap 5</span>
                        <div className={styles.skillBar}>
                            <span className={styles.skillPercentBootstrap}>
                                <span className={styles.tooltip}>%</span> 
                            </span>
                        </div>
                    </div>
                </div>
            </section>
                

            <section className={styles.three}>
                <div className={styles.slideHeader}>
                    <h2>Work</h2>
                    <h2>Experience</h2>
                </div>
                <div>

                </div>
            </section>
        </div>
    );
}

export default WorkExperience;
import styles from './WorkExperience.module.css';

const WorkExperience = () => {
    return (
        <div>
            <div>
                <div>
                    <h3>Relevant Courses</h3>
                </div>
            </div>

            <div>
                <div className={styles.skillHeader}>
                    <h3>Technical Skills</h3>
                </div>

                <div className={styles.skillsMainBody}>
                    <div className={styles.skillsBar}>
                        <div class={styles.skillsInfo}>
                            <p>HTML</p>
                            <p>%</p>
                        </div>

                        <div className={styles.bar}>
                            <span class={styles.html}></span>
                        </div>
                    </div>

                    <div className={styles.skillsBar}>
                        <div class={styles.skillsInfo}>
                            <p>CSS3</p>
                            <p>90%</p>
                        </div>

                        <div className={styles.bar}>
                            <span class={styles.css}></span>
                        </div>
                    </div>

                    <div className={styles.skillsBar}>
                        <div class={styles.skillsInfo}>
                            <p>JavaScript</p>
                            <p>%</p>
                        </div>

                        <div className={styles.bar}>
                            <span class={styles.javascript}></span>
                        </div>
                    </div>

                    <div className={styles.skillsBar}>
                        <div class={styles.skillsInfo}>
                            <p>ReactJS</p>
                            <p>%</p>
                        </div>

                        <div className={styles.bar}>
                            <span class={styles.react}></span>
                        </div>
                    </div>

                    <div className={styles.skillsBar}>
                        <div class={styles.skillsInfo}>
                            <p>Bootstrap 5</p>
                            <p>%</p>
                        </div>

                        <div className={styles.bar}>
                            <span class={styles.bootstrap}></span>
                        </div>
                    </div>

                    <div className={styles.skillsBar}>
                        <div class={styles.skillsInfo}>
                            <p>Python</p>
                            <p>%</p>
                        </div>

                        <div className={styles.bar}>
                            <span class={styles.python}></span>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <h3>Work Experience</h3>
                </div>
            </div>
        </div>
    );
}

export default WorkExperience;
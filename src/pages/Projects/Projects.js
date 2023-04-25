import styles from './Projects.module.css';

const Projects = () => {
    return (
        <div>
            <h2>Projects</h2>
            <div className={styles.card}>
                <div className={styles.cardContent}>
                    <div className={styles.cardFront}>
                        <p className={styles.cardTitle}>Blockchain Prototype</p>

                        <div>
                            <p>JavaScript</p>
                        </div>
                    </div>

                    <div className={styles.cardBack}>
                        
                    </div>
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.cardContent}>
                    <div className={styles.cardFront}>
                        <p className={styles.cardTitle}>Pomodoro Application</p>


                        <div>
                            <p>TypeScript</p>
                            <p>HTML</p>
                            <p>CSS</p>
                        </div>
                    </div>

                    <div className={styles.cardBack}>

                    </div>
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.cardContent}>
                    <div className={styles.cardFront}>
                        <p className={styles.cardTitle}>NEXUS (Front-End)</p>

                        <div>
                            <p>JavaScript</p>
                            <p>HTML</p>
                            <p>CSS</p>
                        </div>
                    </div>

                    <div className={styles.cardBack}>

                    </div>
                </div>

                
            </div>

            <div className={styles.card}>
                <div className={styles.cardContent}>

                    <div className={styles.cardFront}>
                        <p className={styles.cardTitle}>AI Chatbot</p>
                        <p>Python</p>
                    </div>
                    
                    <div className={styles.cardBack}>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
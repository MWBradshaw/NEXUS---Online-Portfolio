import styles from './Projects.module.css';

const Projects = () => {
    return (
        <div>
            <h2>Projects</h2>
            <div className={styles.card}>
                <div className={styles.cardContent}>
                    <div className={styles.cardFront}>
                        <p>Blockchain Prototype</p>

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
                        <p>Pomodoro Application</p>


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
                        <p>NEXUS (Front-End)</p>

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
                        <p>AI Chatbot</p>
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
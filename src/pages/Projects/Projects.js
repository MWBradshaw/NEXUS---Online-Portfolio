import styles from './Projects.module.css';

const Projects = () => {
    return (
        <div>
            <h2>Projects</h2>
            <div className={styles.cardDisplay}>
                <div className={styles.card}>
                    <div className={styles.cardContent}>
                        <div className={styles.cardFront}>
                            <div className={styles.cardFrontTitle}>
                                <p>Blockchain Prototype</p>
                            </div>
                            <div className={styles.cardBody}>
                                
                            </div>
                        </div>

                        <div className={styles.cardBack}>
                            <div class={styles.cardBackBody}>
                                <div className={styles.cardBackTitle}>
                                    <p>Technologies Used:</p>
                                </div>
                                <p>JavaScript</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.cardContent}>
                        <div className={styles.cardFront}>
                            <div className={styles.cardFrontTitle}>
                                <p>Pomodoro Application</p>
                            </div>


                            <div className={styles.cardBody}>
                               
                            </div>
                        </div>

                        <div className={styles.cardBack}>
                            <div class={styles.cardBackBody}>
                                <div className={styles.cardBackTitle}>
                                    <p>Technologies Used:</p>
                                </div>

                                <p>TypeScript</p>
                                <p>HTML</p>
                                <p>CSS</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.cardContent}>
                        <div className={styles.cardFront}>
                            <div className={styles.cardFrontTitle}>
                                <p>NEXUS (Front-End)</p>
                            </div>
                            

                            <div className={styles.cardBody}>
                                
                            </div>
                        </div>

                        <div className={styles.cardBack}>
                            <div class={styles.cardBackBody}>
                                <div className={styles.cardBackTitle}>
                                    <p>Technologies Used:</p>
                                </div>

                                <p>JavaScript</p>
                                <p>HTML</p>
                                <p>CSS</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.cardContent}>

                        <div className={styles.cardFront}>
                            <div className={styles.cardFrontTitle}>
                                <p>AI Chatbot</p>
                            </div>

                            <div className={styles.cardBody}>
                                
                            </div>
                        </div>
                        
                        <div className={styles.cardBack}>
                            <div className={styles.cardBackTitle}>
                                <p>Technologies Used:</p>
                            </div>
                            <div class={styles.cardBackBody}>
                                <p>Python</p>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
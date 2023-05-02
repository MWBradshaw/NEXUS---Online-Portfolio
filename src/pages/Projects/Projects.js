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
                            <div className={styles.cardFrontBody}>
                                
                            </div>
                        </div>

                        <div className={styles.cardBack}>
                            <div class={styles.cardBackBorder}>
                            <div className={styles.cardBackTitle}>
                                    <p>Technologies Used:</p>
                            </div>
                            <div class={styles.cardBackBody}>
                                <p>JavaScript</p>
                            </div>
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


                            <div className={styles.cardFrontBody}>
                               <p>First iteration of my personal website that was built with HTML5, CSS, Bootstrap 5 and JavaScript</p>
                            </div>
                        </div>

                        <div className={styles.cardBack}>
                            <div class={styles.cardBackBorder}>
                                <div className={styles.cardBackTitle}>
                                        <p>Technologies Used:</p>
                                </div>
                                <div class={styles.cardBackBody}>
                                    <p>TypeScript</p>
                                    <p>HTML</p>
                                    <p>CSS</p>
                                </div>
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
                            

                            <div className={styles.cardFrontBody}>
                                
                            </div>
                        </div>

                        <div className={styles.cardBack}>
                            <div class={styles.cardBackBorder}>
                                <div className={styles.cardBackTitle}>
                                        <p>Technologies Used:</p>
                                </div>
                                <div class={styles.cardBackBody}>
                                    <p>JavaScript</p>
                                    <p>HTML</p>
                                    <p>CSS</p>
                                </div>
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

                            <div className={styles.cardFrontBody}>
                                
                            </div>
                        </div>
                        
                        <div className={styles.cardBack}>
                            <div class={styles.cardBackBorder}>
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
        </div>
    );
}

export default Projects;
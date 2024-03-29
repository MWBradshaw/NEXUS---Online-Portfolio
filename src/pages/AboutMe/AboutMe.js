import styles from './AboutMe.module.css';
import Headshot from "../../assets/Headshot.JPG";

const AboutMe = () => {
    return (
        <div>
            <div className={styles.aboutMeBody}>
                <div className={styles.aboutMeTextBody}>
                    <h2>About Me</h2>
                    <p>Hi! My name is Matthew Bradshaw and I am an aspiring front-end developer. As a young child, I always had an interest in art and technology and I see front end development as a way to combine those two passions.</p>
                    <p>Outside of that, I enjoy playing the guitar, exercising and reading.</p>
                </div>

                <div>
                    <img className={styles.headshot} src={Headshot} alt="The author's headshot"></img>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
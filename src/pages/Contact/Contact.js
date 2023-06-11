import styles from "./Contact.module.css";

const Contact = () => {
    return (
        <div className={styles.contactBody}>
            <h2>Contact Me</h2>
            <div>
                <div>
                    <form className={styles.formBody}>
                        <div>
                            <div className={styles.contactSubHeader}>
                                <h4>Interested in working together? </h4>
                            </div>
                            <label>Your Name</label>
                            <input type="text" placeholder="Enter Your Name"></input>
                            <label>Email Address</label>
                            <input type="text" placeholder="Enter Your Email"></input>
                        </div>
                        <textarea placeholder="Enter Your Message"></textarea>
                        <input type="submit" value="Submit"></input>
                    </form>
                </div>

                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default Contact;
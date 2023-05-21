const Contact = () => {
    return (
        <div>
            <h2>Contact Me</h2>
            <div>
                <div>
                    <form>
                        <div>
                            <label>Your Name:</label>
                            <input type="text"></input>
                            <label>Email Address</label>
                            <input type="text"></input>
                        </div>

                        <div>
                            <textarea placeholder="Your Message"></textarea>
                            <input type="submit" value="Submit"></input>
                        </div>
                    </form>
                </div>

                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default Contact;
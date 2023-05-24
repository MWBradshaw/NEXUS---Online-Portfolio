const Contact = () => {
    return (
        <div>
            <h2>Contact Me</h2>
            <div>
                <div>
                    <form>
                        <div>
                            <label>Your Name:</label>
                            <input type="text" placeholder="Enter Your Name"></input>
                            <label>Email Address</label>
                            <input type="text" placeholder="Enter Your Email"></input>
                        </div>

                        <div>
                            <textarea placeholder="Enter Your Message"></textarea>
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
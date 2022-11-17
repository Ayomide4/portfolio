import React from "react";

const Contact = () => {
    return (
        <div className="page-container">
            <div className="contact-container">
                <p className="contact-title">CONTACT.</p>

                <p className="direct">Get in touch or shoot me an email directly on aomotosho4@gmail.com</p>
                <form>
                    <div className="field">
                        <label for="name"></label>
                        <input type="text" className="input-name" name="name" placeholder="Name" />
                    </div>
                    <div className="field">
                        <label for="email"></label>
                        <input type="text" className="input-email" name="email" placeholder="Email" size="300" />
                    </div>
                    <div className="message-field">
                        <label for="message"></label>
                        <textarea  type="text" className="input-message" name="message" placeholder="Message"/>
                    </div>
                <button className="submit-btn" type="button"><p>Send Message</p></button>
                </form>
            </div>
        </div>
    )
}

export default Contact
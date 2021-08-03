import React from 'react';
import '../style.css';

function Contact () {
    return (
        <div>
            <h1>Get in touch with me</h1>
        <div className="container">
            <div className="git-cont row">
                <div className="col-12 col-sm-6 half">
                    <form 
                    // action={contact.contactUrl ? contact.contactUrl : "https://formspree.io"} method={contact.contactUrl ? "POST" : "GET"}
                    >
                        <input type="text" id="fname" name="firstname" placeholder="Your name" required></input>
                        <input type="mail" id="mailid" name="Email" placeholder="Email Address" required></input>
                        <input type="text" id="sub" name="Subject" placeholder="Subject" required></input>
                        <textarea id="msg" name="message" placeholder="Message" required></textarea>
                        <button style={{cursor: 'pointer'}} type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

        
    )
}





export default Contact
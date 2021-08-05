import React from 'react';
import '../style.css';
import { contact, contactTitle } from '../general'

function Contact () {
    return  (
        <div className="contact">
                <div className="contact-form">
                    <>
                <div className="contact-head-div text-center mx-auto">
                        <h1 id="Contact" className="contact-head">{contactTitle}</h1>
                </div>
                <br></br>
                </>
                <div className="container">
            <div className="contact-cont row">
                <div className="cont-form col-12 col-sm-6 half">
                    <form action={contact.contactUrl ? contact.contactUrl : "https://formspree.io/f/meqvrrek"} method={contact.contactUrl ? "POST" : "GET"}>
                        <input type="text" size="50" id="fname" name="firstname" placeholder="Your name" required></input>
                        <input type="mail" size="50" id="mailid" name="Email" placeholder="Email Address" required></input>
                        <input type="text" size="50" id="sub" name="Subject" placeholder="Subject" required></input>
                        
                        <textarea id="msg" size="250"name="message" placeholder="Message" required></textarea>
                        <br></br>
                        <button style={{cursor: 'pointer'}} type="submit">Send</button>
                        
                    </form>
                </div>
                <div className="col-12 col-sm-6 half">
                    <p className="lead">
                        {contact.text}        
                    </p>
                </div>
            </div>
            </div>
        </div>
        <br></br>
        </div>
    )
}





export default Contact
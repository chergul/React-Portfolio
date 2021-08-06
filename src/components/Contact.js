import React from 'react';
import '../style.css';
import { contact, contactTitle } from '../general'
import emailjs from 'emailjs-com';

function Contact () {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForum
        (
        'service_rfvpojc',
        'template_r7jln2p',
        e.target,
        'user_dZSbzY2Qf79E6TdjSUtlz'
        ).then(res=>{
            console.log(res);
        }). catch(err=>console.log(err));
        e.target.reset();
    }
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
                    <form onSubmit={sendEmail}>
                        <input type="text" size="50" name="name" placeholder="Your name" required></input>
                        <input type="mail" size="50" name="user_email" placeholder="Email Address" required></input>
                        <input type="text" size="50" name="subject" placeholder="Subject" required></input>
                        
                        <textarea id="msg" size="250"name="message" placeholder="Message" required></textarea>
                        <br></br>
                        <button className="btn btn-dark"style={{cursor: 'pointer'}} type="submit">Send</button>
                        
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
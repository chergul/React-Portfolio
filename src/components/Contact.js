import React, {useState} from 'react';
import '../style.css';
import { contact, contactTitle } from '../general'
import emailjs from 'emailjs-com';
import sendForum from 'emailjs-com';

function Contact () {
    const [form,setForm] = useState ({
        name: "",
        user_email:"",
        subject:"",
        message:"",
        })

        const updateForm = (e) => {
            setForm ({
                ...form,
                [e.target.name]: e.target.value,
            })
            console.log(e.target)
        }
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm
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
                        <input onChange ={updateForm} type="text" size="50" name="name" placeholder="Your name" value={form.name} required></input>
                        <input onChange ={updateForm} type="mail" size="50" name="user_email" placeholder="Email Address" value={form.user_email} required></input>
                        <input onChange ={updateForm} type="text" size="50" name="subject" placeholder="Subject" value={form.subject} required></input>
                        
                        <textarea onChange ={updateForm} id="msg" size="250"name="message" placeholder="Message" value={form.message} required></textarea>
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
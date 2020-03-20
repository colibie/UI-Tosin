import React from 'react';
import './Contact.css';
import Button from '../Components/Button'

function Contact() {
  return (
    <section className="contact">
        <p className="contact-header">contact us</p>
        <p className="contact-tag">Have an awesome idea in your mind?
        <br />We would love to hear</p>
        <form>
            <input className="form-input" placeholder='enter your email'/>
            <Button className="contact-button" content='start'/>
        </form>
    </section>
  );
}

export default Contact;

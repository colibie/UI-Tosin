import React from 'react';
import './Contact.css';
import Button from '../Components/Button'

function Contact() {
  return (
    <section className="contact">
        <p>contact us</p>
        <p>Have an awesome idea in your mind?</p>
        <p>We would love to hear</p>
        <form>
            <input className="form-input" placeholder='enter your email'/>
            <Button content='start'/>
        </form>
    </section>
  );
}

export default Contact;

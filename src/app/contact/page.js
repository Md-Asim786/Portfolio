"use client"
import './contact.css';
const Contact = () => {
    return (
            <div className='contact'>
                <h1>Contact Me</h1>
                <p>Get in touch</p>
                <form className='form'>
                    <input type='text' className='in' placeholder='Your Name' required />
                    <input type='email'className='inp' placeholder='Your Email' required />
                    <input type='text' placeholder='Your Address' required />
                    <input type='number'placeholder='Your Phone Number' required />
                    <textarea cols='20' rows={10} placeholder='Your Message' required />
                    <div className='c-m-btn'>
                        <button type='submit' className='btn'>Send Message</button>
                    </div>
                </form>
            </div>
    )
}

export default Contact;

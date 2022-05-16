import { useState } from "react";
import './Kontakt.css';
import emailjs from 'emailjs-com'
import { init } from 'emailjs-com';
init('x5hqggg1grU3JBTij');


export function  Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const isValidEmail = email => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    };
    
    const submit = () => {
        if (isValidEmail){
            alert('Enter a valid email!');
            return
        }
        if (name && email && message && subject) {
            const serviceId = 'service_foot9dp';
            const templateId = 'template_s4rxaod';
            const templateParams = {
                name,
                email,
                message,
                subject
            };

            emailjs.send(serviceId, templateId, templateParams)
                .then(response => console.log(response))
                .then(error => console.log(error));
    
            setSubject('');
            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }

    return (
        <div className="contact">
            <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
            <input type="email" placeholder="E-Mail" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="subject" placeholder="Subject" value={subject} onChange={e => setSubject(e.target.value)} />
            <textarea placeholder="Message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
            <button onClick={submit}>Send Message</button>
            <span className={emailSent ? 'visible' : 'invisible'}>Thank you for your message, we will be in touch in no time!</span> 
        </div>
    )
}
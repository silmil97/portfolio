import { useState } from "react";
import './Kontakt.css';
import emailjs from 'emailjs-com'
import { init } from 'emailjs-com';
init('x5hqggg1grU3JBTij');


export function  Kontakt() {
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
            alert('Bitte eine zulässige E-Mail angeben');
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
            alert('Die Nachricht wurde gesendet')
        } else {
            alert('Bitte alle Felder ausfüllen.');
        }
    }

    return (
        <div className="contact">
            <h2 className="contactTitle"><span>K</span>ontakt</h2>
            <div className="inputs">
                <input className="contact-input" type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                <input className="contact-input" type="email" placeholder="E-Mail" value={email} onChange={e => setEmail(e.target.value)} />
                <input className="contact-input" type="subject" placeholder="Betreff" value={subject} onChange={e => setSubject(e.target.value)} />
                <textarea className="message" placeholder="Nachricht" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                <button className="subbut" onClick={submit}>Nachricht senden</button>
                <span className={emailSent ? 'visible' : 'invisible'}>Danke für die Nachricht, ich werde mich schnellstmöglich melden!{/*Thank you for your message, we will be in touch in no time!*/}</span> 
            </div>
        </div>
    )
}
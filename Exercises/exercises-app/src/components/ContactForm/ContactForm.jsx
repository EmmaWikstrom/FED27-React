import { useState } from "react";

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    return (
            <form>
                <label htmlFor="name">Name:</label>
                <input id="name" type="text" name="username" placeholder='Name' />
                <label htmlFor="email">Email:</label>
                <input id="email" type="email" name="email" placeholder="Email" />
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" placeholder="Your message" />
                <button type="submit">Submit</button>
            </form>
    )

};  

export default ContactForm;
import { useState } from "react";

const ContactForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('Form submitted:', { name, email, message });

        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <form onSubmit={handleSubmit}>

            <label htmlFor="name">Name:</label>
            <input
                id="name"
                type="text"
                name="username"
                placeholder="Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />

            <label htmlFor="email">Email:</label>
            <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />

            <label htmlFor="message">Message:</label>
            <textarea
                id="message"
                name="message"
                placeholder="Your message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
            ></textarea>

            <button type="submit">Submit</button>

        </form>
    );
};

export default ContactForm;
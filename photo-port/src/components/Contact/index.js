import React, { useState } from 'react';


function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });


    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
    }
      
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
      }
        //console.log(formState);

    // JSX
    return (
        <section>
          <h1>Contact me</h1>
          <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" onChange={handleChange} name="name" defaultValue={formState.name}/>
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" onChange={handleChange} name="email" defaultValue={formState.email}/>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" onChange={handleChange} rows="5"  defaultValue={formState.message}/>
                </div>
                <button type="submit">Submit</button>
          </form>
        </section>
      )
    }
    
export default Contact;
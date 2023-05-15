import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const EmailForm = () => {
  const form = useRef();

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    if (validateForm()) {
      emailjs
        .sendForm('service_3vb1g7i', 'template_3s03nm9', form.current, 'Qao2bA4J84BzuUX7K')
        .then((result) => {
          console.log(result.text);
          form.current.reset(); // Clear form fields immediately
          setSubmitted(true); // Set submission status
        })
        .catch((error) => {
          console.log(error.text);
        });
    }
  };

  const validateForm = () => {
    let errors = {};
    if (!form.current.user_name.value.trim()) {
      errors.name = 'Name is required';
    }
    if (!form.current.user_email.value.trim()) {
      errors.email = 'Email is required';
    }
    if (!form.current.message.value.trim()) {
      errors.message = 'Message is required';
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact-form">
      <label>Name</label>
      <input type="text" name="user_name" />
      {errors.name && <span>{errors.name}</span>}

      <label>Email</label>
      <input type="email" name="user_email" />
      {errors.email && <span>{errors.email}</span>}

      <label>Message</label>
      <textarea name="message" />
      {errors.message && <span>{errors.message}</span>}

      <input className="btn" type="submit" value="Send" />
      {submitted && <span>Form submitted successfully!</span>}
    </form>
  );
};

export default EmailForm;
import React from 'react';
import EmailForm from '../EmailForm';

export default function Contact() {
    return (
<div >
    <div className="contact-header">
        <h2>
        Contact Me
    </h2>
    </div>
    <div>
        {EmailForm()}
    </div>
</div>
    );
}

import React from 'react';
import  '../../styles/styles.css';
import EmailForm from '../EmailForm';

export default function Contact() {

    return (
<div >
    <div className="address">
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
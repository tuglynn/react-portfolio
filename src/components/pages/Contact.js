import React from 'react';
import  '../../styles/styles.css';
import EmailForm from '../EmailForm';
let firstName = document.querySelector('#name');
let email= document.querySelector('#email');
let message = document.querySelector('#message');

const handleFormSubmit = () => {
    console.log(firstName.value, email.value, message.value);
}



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
//working on making the form
// export default function Contact() {
//     return (
// <div>
//     <div className="address">
//         <h2>
//         Contact Me
//     </h2>
//     {/* <a href="mailto:pmtgcode@gmail.com?" subject="Questions about code">Email</a>
//     <a href="http://www.linkedin.com/in/patrick-tu-glynn
//     " target="_blank" rel="noopener noreferrer">Linked-In</a> */}

// <form>
//     <label for='name' >Name:</label>
//     <br/>
//     <input type='text' id='name'></input>
//     <br/>
//     <label for='email'>Email Address:</label>
//     <br/>
//     <input type='text' id='email'></input>
//     <br/>
//     <textarea/>
//     <br/>
//     <button type='button'>Submit</button>

// </form>

//     </div>
//     <div className="resume">
//         <h3>Resume</h3>
//         <iframe src={resume} width="800" height="800" title="resume"/>
//     </div>
// </div>
//     );
// }
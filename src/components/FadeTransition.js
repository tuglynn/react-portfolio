import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../styles/FadeTransition.css'; // Create this file to define your CSS transitions

const FadeTransition = ({ children }) => {
    const [inProp, setInProp] = useState(false);
  
    useEffect(() => {
      setInProp(true);
    }, []);
  
    return (
      <CSSTransition
        in={inProp}
        timeout={300} // Adjust this value to control the duration of the transition
        classNames="fade"
        unmountOnExit
      >
        {children}
      </CSSTransition>
    );
  };

  export default FadeTransition;
  
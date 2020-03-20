import React from 'react';
import './Button.css';

function Button({content}) {
  return (
    <button className='button'>{content}</button>
  );
}

export default Button;

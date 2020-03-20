import React from 'react';
import './service.css';


function Service(props) {
  return (
    <section className="service">
        <p className="service-icon"><icon>{props.icon}</icon></p>
        <p className="service-title">{props.title}</p>
        <p className="service-body">{props.body}</p>
    </section>
  );
}

export default Service;

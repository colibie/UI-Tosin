import React from 'react';
import '../App.css';


function Team(props) {
  return (
    <section className="">
        <img src={props.img} alt={props.name} />
        <p>{props.name}</p>
        <p>{props.title}</p>
        <ul>
            <li><icon>{props.facebook}</icon></li>
            <li><icon>{props.twitter}</icon></li>
            <li><icon>{props.dribble}</icon></li>
            <li><icon>{props.linkedin}</icon></li>
        </ul>
    </section>
  );
}

export default Team;

import React from 'react';
import './team.css';


function Team(props) {
  return (
    <section className="team">
        <img src={props.img} alt={props.name} height="350" width="250" />
        <p className="team-name">{props.name}</p>
        <p className="team-title">{props.title}</p>
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

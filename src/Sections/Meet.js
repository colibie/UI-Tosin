import React from 'react';
import './Meet.css';
import Team from '../Components/Team';
import Button from "../Components/Button";
import personA from '../assets/pexels-photo-846741-removebg-preview.png';
import personB from '../assets/pexels-photo-1036623-removebg-preview.png';
import personC from '../assets/pexels-photo-1036627-removebg-preview.png';


const team = [
    { id: 1, img:personA, name:'jam potrick', 
        title:'Standard screen generation',
        facebook:'some fb', dribble:'some dribble',
        twitter:'some twitter', linkedin:'some linkedin'
    },
    { id: 2, img:personB, name:'ema jonas', 
        title:'Standard screen generator',
        facebook:'some fb', dribble:'some dribble',
        twitter:'some twitter', linkedin:'some linkedin'
    },
    { id: 3, img:personC, name:'mike pens', 
        title:'Standard screen generation',
        facebook:'some fb', dribble:'some dribble',
        twitter:'some twitter', linkedin:'some linkedin'
    },
]

function Meet() {
  return (
    <section className="meet">
        <div className="meet-intro">
            <p className="meet-header">Meet The Team </p>
            <p className="meet-tag">great outcome always relay on the great foundation </p>
        </div>
        <div className="team-list">
        {
            team.map(member => (
                <Team
                    key={member.id} 
                    img={member.img}
                    name={member.name} 
                    title={member.title} 
                    facebook={member.facebook}
                    dribble={member.dribble}
                    twitter={member.twitter}
                    linkedin={member.linkedin}
                />
            ))
        }
        </div>
        <Button className="meet-button"content="LET'S CATCH ALL"/>
    </section>
  );
}

export default Meet;

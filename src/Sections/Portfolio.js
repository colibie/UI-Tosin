import React from 'react';
import './Portfolio.css';
import Service from '../Components/Service'

const services = [
  { id: 1, icon:'some src', title:'Web design', 
    body:'modern web design services with new trends and direction.',
  },
  { id: 2, icon:'some src', title:'Branding', 
    body:'highly professional branding and logo design work.',
  },
  { id: 3, icon:'some src', title:'Motion graphics', 
    body:'modern motion graphics and animation for businesses. ',
  },
  { id: 4, icon:'some src', title:'ui/ux design', 
    body:'Standard screen generation and design for all devices.',
  },
  { id: 5, icon:'some src', title:'Web development', 
    body:'website development is something we are best in. ',
  },
  { id: 6, icon:'some src', title:'App testing', 
    body:'we test app for better user experience and results.',
  },
]

function Portfolio() {
  return (
    <section className="portfolio">
        <h2>Services 
        <br /> & Portfolio </h2>
        <div className="service-list">
        {
            services.map(service => (
                <Service
                    key={service.id}
                    icon={service.icon} 
                    title={service.title} 
                    body={service.body}
                />
            ))
        }
        </div>
    </section>
  );
}

export default Portfolio;

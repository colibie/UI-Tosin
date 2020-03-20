import React from 'react';
import './Portfolio.css';
import Service from '../Components/Service'

const services = [
  { id: 1, icon:'img', title:'Web design', 
    body:'modern web design services with new trends and direction.',
  },
  { id: 2, icon:'img', title:'Branding', 
    body:'highly professional branding and logo design work.',
  },
  { id: 3, icon:'img', title:'Motion graphics', 
    body:'modern motion graphics and animation for businesses. ',
  },
  { id: 4, icon:'img', title:'ui/ux design', 
    body:'Standard screen generation and design for all devices.',
  },
  { id: 5, icon:'img', title:'Web development', 
    body:'website development is something we are best in. ',
  },
  { id: 6, icon:'img', title:'App testing', 
    body:'we test app for better user experience and results.',
  },
]

function Portfolio() {
  return (
    <section className="portfolio">
        <p>services</p>
        <p>& portfolio </p>
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

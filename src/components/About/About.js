import React from 'react';
import './About.css';
import Chef2 from '../../assets/restaurant_chef_B.jpg';

function About() {
    return <section className="about-background">
        <div className="section-left">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally sourced menu with daily specials.</p>
        </div>
        <div className="section-right">
            <img src={Chef2} alt="chef 1" className='chef1' />
        </div>
    </section>
}

export default About
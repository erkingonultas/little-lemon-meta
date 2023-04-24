import React from 'react';
import Cards from './Cards.js';
import './Specials.css';

function Specials () {
    return <section className="specials-background">
        <div className="specials-title-section">
        <h1 className="specials-header">
            This Week's Specials
        </h1>
        <button className="btn btn-menu">Online Menu</button>
        </div>
    <Cards />
    </section>
}

export default Specials
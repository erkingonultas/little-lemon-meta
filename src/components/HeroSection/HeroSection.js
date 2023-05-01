import React from 'react';
import { NavLink } from 'react-router-dom';
import './HeroSection.css';
import Poster from '../../assets/restauranfood.jpg';


function HeroSection () {
    return <section className="hero-section-background">
        <div className="hero-section-container">
            <div className="section-left">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <NavLink to="/booking"><button className="btn">Reserve a Table</button></NavLink>
            </div>
            <div className="section-right">
                <div className="image-box">
                <img src={Poster} alt="restaurant-poster"/>
                </div>
            </div>
        </div>
    </section>
}

export default HeroSection
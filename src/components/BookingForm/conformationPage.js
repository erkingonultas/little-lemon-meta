import React from "react";
import './BookingForm.css';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";
import './BookingForm.css'

function ConformationPage() {
    return (
        <>
            <Navbar />
            <section className="conformation-section">
                <h2>Reservation Successful</h2>
                <br></br>
                <p>Details will be send to your contacts.</p>
                <br></br>
                <NavLink to="/">
                    <button className="btn">
                        Return Home
                    </button>
                </NavLink>
            </section>
            <Footer />
        </>
    )
}

export default ConformationPage


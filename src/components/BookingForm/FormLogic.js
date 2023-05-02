import React from 'react';
import { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import './BookingForm.css'
//NavLink,

function FormLogic(props) {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const [finalTime, setFinalTime] = useState(
        props.availableTimes.map((time) => <option key={time} >{time}</option>)
    );

    function handleDateChange(e) {
        setDate(e.target.value);

        var stringify = e.target.value;
        const date = new Date(stringify);

        props.updateTimes(date);
        setFinalTime(props.availableTimes.map((time) => <option key={time}>{time}</option>));
    }

    const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();
    
    navigate("/conformation");
  };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="info">
                    <div className="personalInfo-div">
                        <div>
                            <label htmlFor="fullName">Full Name* </label>
                            <input
                                required
                                key={'fullName'}
                                type="text"
                                id="fullName"
                                placeholder='Full Name'
                                minLength={2}
                                maxLength={64}
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />
                        </div>
                        <div>

                            <label htmlFor="email">Email* </label>
                            <input
                                required
                                key={'email'}
                                type="email"
                                id="email"
                                placeholder='email@example.com'
                                minLength={7}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="phone">Phone Number* </label>
                            <input
                                required
                                key={'phone'}
                                type="tel"
                                id="phone"
                                placeholder='(012)-345-6789'
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="time-div">
                        <div>
                            <label htmlFor="res-date">Choose date* </label>
                            <input
                                required
                                key={'res-date'}
                                type="date"
                                id="res-date"
                                value={date}
                                onChange={handleDateChange}
                            /></div>
                        <div>
                            <label htmlFor="res-time">Choose time* </label>
                            <select required key={'res-time'} id="res-time">
                                {finalTime}
                            </select>
                        </div>
                    </div>
                    <div className="guests-div">
                        <div>
                            <label required htmlFor="guests">Number of guests* </label>
                            <input
                                required
                                key={'guests'}
                                id='guests'
                                type="number"
                                placeholder='1'
                                value={guests}
                                min="1"
                                max="6"
                                onChange={(e) => setGuests(e.target.value)}
                            /></div>
                        <div>
                            <label htmlFor="occasion">Occasion </label>
                            <select
                                id="occasion"
                                key={'occasion'}
                                value={occasion}
                                onChange={(e) => setOccasion(e.target.value)}
                            >
                                <option key={'occasion-none'}>None</option>
                                <option key={'occasion-birthday'}>Birthday</option>
                                <option key={'occasion-anniversary'}>Anniversary</option>
                                <option key={'occasion-other'}>Other</option>
                            </select>
                        </div>
                    </div>
                </div>
                    <button 
                    type="submit"
                        key={'reserve-button'}
                        value="Make your Reservation"
                        className='btn'
                        
                        >Reserve a Table</button>
                {/* <NavLink to="/conformation">
                </NavLink> */}
            </form>
        </div>
    )
}

export default FormLogic
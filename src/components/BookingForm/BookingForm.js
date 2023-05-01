import React from 'react';
import { useReducer } from 'react';
import {fetchAPI} from './BookingsAPI';
import './BookingForm.css';
import FormLogic from './FormLogic';

function BookingForm() {
    function updateTimes(date) {
        return fetchAPI(date);
    }

    const output = fetchAPI(new Date());

    const [availableTimes, dispatch] = useReducer(updateTimes, output);

    return <section className="booking-section">
        <h1>Book a Table</h1>
        <p id='required-text'>* required</p>
        <FormLogic availableTimes={availableTimes} updateTimes={dispatch} />
    </section>
}

export default BookingForm

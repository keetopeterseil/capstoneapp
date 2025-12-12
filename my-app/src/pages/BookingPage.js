import React from 'react';
import BookingForm from '../components/BookingForm';

function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <div className="booking-page">
      <div className="booking-header">
        <h1>Reserve a Table</h1>
        <p>Book your table at Little Lemon Chicago</p>
      </div>
      
      <BookingForm 
        availableTimes={availableTimes} 
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </div>
  );
}

export default BookingPage;
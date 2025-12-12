import React, { useState } from 'react';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  // State for form fields
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  // State for validation errors
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // Get today's date in YYYY-MM-DD format for min date validation
  const today = new Date().toISOString().split('T')[0];

  // Validate individual fields
  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'date':
        if (!value) {
          error = 'Please select a date';
        } else if (new Date(value) < new Date(today)) {
          error = 'Please select a future date';
        }
        break;
      case 'time':
        if (!value) {
          error = 'Please select a time';
        }
        break;
      case 'guests':
        if (!value || value < 1) {
          error = 'Number of guests must be at least 1';
        } else if (value > 10) {
          error = 'Number of guests cannot exceed 10';
        }
        break;
      case 'occasion':
        if (!value) {
          error = 'Please select an occasion';
        }
        break;
      default:
        break;
    }

    return error;
  };

  // Validate all fields
  const validateForm = () => {
    const newErrors = {};
    newErrors.date = validateField('date', date);
    newErrors.time = validateField('time', time);
    newErrors.guests = validateField('guests', guests);
    newErrors.occasion = validateField('occasion', occasion);
    return newErrors;
  };

  // Check if form is valid
  const isFormValid = () => {
    const formErrors = validateForm();
    return !Object.values(formErrors).some(error => error !== '');
  };

  // Handle date change and dispatch action to update available times
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    setTouched({ ...touched, date: true });
    
    const error = validateField('date', selectedDate);
    setErrors({ ...errors, date: error });
    
    // Dispatch action to update available times based on selected date
    dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
  };

  const handleTimeChange = (e) => {
    const selectedTime = e.target.value;
    setTime(selectedTime);
    setTouched({ ...touched, time: true });
    
    const error = validateField('time', selectedTime);
    setErrors({ ...errors, time: error });
  };

  const handleGuestsChange = (e) => {
    const guestCount = e.target.value;
    setGuests(guestCount);
    setTouched({ ...touched, guests: true });
    
    const error = validateField('guests', guestCount);
    setErrors({ ...errors, guests: error });
  };

  const handleOccasionChange = (e) => {
    const selectedOccasion = e.target.value;
    setOccasion(selectedOccasion);
    setTouched({ ...touched, occasion: true });
    
    const error = validateField('occasion', selectedOccasion);
    setErrors({ ...errors, occasion: error });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mark all fields as touched
    setTouched({
      date: true,
      time: true,
      guests: true,
      occasion: true
    });

    // Validate all fields
    const formErrors = validateForm();
    setErrors(formErrors);

    // Check if form is valid
    if (!Object.values(formErrors).some(error => error !== '')) {
      const formData = {
        date,
        time,
        guests: Number(guests),
        occasion
      };
      
      // Call the submitForm function passed via props
      submitForm(formData);
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#495E57' }}>Book Now</h2>
      <form 
        className="booking-form" 
        onSubmit={handleSubmit} 
        style={{ display: 'grid', maxWidth: '400px', gap: '20px', margin: '0 auto' }}
        noValidate
      >
        {/* Date Field */}
        <label htmlFor="res-date">Choose date *</label>
        <input 
          type="date" 
          id="res-date"
          value={date}
          onChange={handleDateChange}
          min={today}
          required
          aria-label="Choose date"
          aria-required="true"
          aria-invalid={touched.date && errors.date ? 'true' : 'false'}
          aria-describedby={touched.date && errors.date ? 'date-error' : undefined}
        />
        {touched.date && errors.date && (
          <span id="date-error" style={{ color: '#EE9972', fontSize: '0.9rem' }}>
            {errors.date}
          </span>
        )}
        
        {/* Time Field */}
        <label htmlFor="res-time">Choose time *</label>
        <select 
          id="res-time"
          value={time}
          onChange={handleTimeChange}
          required
          aria-label="Choose time"
          aria-required="true"
          aria-invalid={touched.time && errors.time ? 'true' : 'false'}
          aria-describedby={touched.time && errors.time ? 'time-error' : undefined}
        >
          <option value="">Select a time</option>
          {availableTimes.map((availableTime) => (
            <option key={availableTime} value={availableTime}>
              {availableTime}
            </option>
          ))}
        </select>
        {touched.time && errors.time && (
          <span id="time-error" style={{ color: '#EE9972', fontSize: '0.9rem' }}>
            {errors.time}
          </span>
        )}
        
        {/* Guests Field */}
        <label htmlFor="guests">Number of guests *</label>
        <input 
          type="number" 
          placeholder="1" 
          min="1" 
          max="10" 
          id="guests"
          value={guests}
          onChange={handleGuestsChange}
          required
          aria-label="Number of guests"
          aria-required="true"
          aria-invalid={touched.guests && errors.guests ? 'true' : 'false'}
          aria-describedby={touched.guests && errors.guests ? 'guests-error' : undefined}
        />
        {touched.guests && errors.guests && (
          <span id="guests-error" style={{ color: '#EE9972', fontSize: '0.9rem' }}>
            {errors.guests}
          </span>
        )}
        
        {/* Occasion Field */}
        <label htmlFor="occasion">Occasion *</label>
        <select 
          id="occasion"
          value={occasion}
          onChange={handleOccasionChange}
          required
          aria-label="Occasion"
          aria-required="true"
          aria-invalid={touched.occasion && errors.occasion ? 'true' : 'false'}
          aria-describedby={touched.occasion && errors.occasion ? 'occasion-error' : undefined}
        >
          <option value="">Select an occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        {touched.occasion && errors.occasion && (
          <span id="occasion-error" style={{ color: '#EE9972', fontSize: '0.9rem' }}>
            {errors.occasion}
          </span>
        )}
        
        {/* Submit Button */}
        <input 
          type="submit" 
          value="Make Your reservation" 
          className="btn btn-submit"
          disabled={!isFormValid()}
          style={{
            opacity: isFormValid() ? 1 : 0.6,
            cursor: isFormValid() ? 'pointer' : 'not-allowed'
          }}
          aria-label="Make your reservation"
        />
      </form>
    </div>
  );
}

export default BookingForm;
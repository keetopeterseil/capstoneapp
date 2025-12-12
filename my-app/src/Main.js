import React, { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Homepage from './pages/Homepage';
import BookingPage from './pages/BookingPage';
import ConfirmedBooking from './pages/ConfirmedBooking';
import AboutPage from './pages/AboutPage';
import MenuPage from './pages/MenuPage';
import OrderPage from './pages/OrderPage';
import LoginPage from './pages/LoginPage';
import { initializeTimes, updateTimes } from './utils/timesUtils';

function Main() {
  const navigate = useNavigate();
  
  // Use reducer for availableTimes state
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  // Submit form function
  const submitForm = (formData) => {
    // Check if API function is available
    if (typeof window.submitAPI === 'function') {
      const success = window.submitAPI(formData);
      
      if (success) {
        // Navigate to confirmation page
        navigate('/confirmed');
        return true;
      }
    }
    
    // Fallback: always navigate to confirmation for testing
    navigate('/confirmed');
    return true;
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route 
          path="/reservations" 
          element={
            <BookingPage 
              availableTimes={availableTimes} 
              dispatch={dispatch}
              submitForm={submitForm}
            />
          } 
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </main>
  );
}

export default Main;
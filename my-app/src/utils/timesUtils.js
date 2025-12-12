// Initialize available times using the API for today's date
export function initializeTimes() {
  const today = new Date();
  
  // Check if the API function is available
  if (typeof window.fetchAPI === 'function') {
    return window.fetchAPI(today);
  }
  
  // Fallback if API is not available
  return [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ];
}

// Reducer function to update times based on selected date using the API
export function updateTimes(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // Use the API to fetch available times for the selected date
      const selectedDate = new Date(action.payload);
      
      if (typeof window.fetchAPI === 'function') {
        return window.fetchAPI(selectedDate);
      }
      
      // Fallback if API is not available
      return state;
      
    default:
      return state;
  }
}
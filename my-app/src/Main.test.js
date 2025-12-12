import { initializeTimes, updateTimes } from './utils/timesUtils';

// Mock the window.fetchAPI function
beforeEach(() => {
  // Mock fetchAPI to return a non-empty array of available times
  window.fetchAPI = jest.fn((date) => {
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  });
});

afterEach(() => {
  // Clean up the mock after each test
  delete window.fetchAPI;
});

// Step 1: Test initializeTimes with API
test('initializeTimes returns a non-empty array of available times from API', () => {
  const times = initializeTimes();
  
  // Verify it returns a non-empty array
  expect(Array.isArray(times)).toBe(true);
  expect(times.length).toBeGreaterThan(0);
  
  // Verify the correct times are returned
  expect(times).toEqual([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ]);
  
  // Verify the API was called
  expect(window.fetchAPI).toHaveBeenCalledTimes(1);
});

// Step 2: Test updateTimes with a pre-selected date
test('updateTimes returns updated times from API when given a selected date', () => {
  const initialState = ['17:00', '18:00'];
  const selectedDate = '2024-12-15';
  const action = { type: 'UPDATE_TIMES', payload: selectedDate };
  
  const newState = updateTimes(initialState, action);
  
  // Verify it returns a non-empty array
  expect(Array.isArray(newState)).toBe(true);
  expect(newState.length).toBeGreaterThan(0);
  
  // Verify the API was called with the correct date
  expect(window.fetchAPI).toHaveBeenCalledTimes(1);
  expect(window.fetchAPI).toHaveBeenCalledWith(new Date(selectedDate));
  
  // Verify the new times are returned
  expect(newState).toEqual([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ]);
});

test('updateTimes returns the state for unknown action type', () => {
  const initialState = ['17:00', '18:00', '19:00'];
  const action = { type: 'UNKNOWN_ACTION' };
  
  const newState = updateTimes(initialState, action);
  
  expect(newState).toEqual(initialState);
  expect(window.fetchAPI).not.toHaveBeenCalled();
});

// Test fallback behavior when API is not available
test('initializeTimes returns fallback times when API is not available', () => {
  delete window.fetchAPI; // Remove the mock
  
  const times = initializeTimes();
  
  // Should still return a non-empty array
  expect(Array.isArray(times)).toBe(true);
  expect(times.length).toBeGreaterThan(0);
  expect(times).toEqual([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ]);
});

test('updateTimes returns state when API is not available', () => {
  delete window.fetchAPI; // Remove the mock
  
  const initialState = ['17:00', '18:00', '19:00'];
  const action = { type: 'UPDATE_TIMES', payload: '2024-12-15' };
  
  const newState = updateTimes(initialState, action);
  
  // Should return the current state as fallback
  expect(newState).toEqual(initialState);
});
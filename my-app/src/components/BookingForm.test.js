import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
    const mockAvailableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const mockDispatch = jest.fn();
    
    render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
});

test('Renders the Choose date label', () => {
    const mockAvailableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const mockDispatch = jest.fn();
    
    render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);
    const labelElement = screen.getByText("Choose date");
    expect(labelElement).toBeInTheDocument();
});

test('Renders the Choose time label', () => {
    const mockAvailableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const mockDispatch = jest.fn();
    
    render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);
    const labelElement = screen.getByText("Choose time");
    expect(labelElement).toBeInTheDocument();
});

test('Renders the Number of guests label', () => {
    const mockAvailableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const mockDispatch = jest.fn();
    
    render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);
    const labelElement = screen.getByText("Number of guests");
    expect(labelElement).toBeInTheDocument();
});

test('Renders the Occasion label', () => {
    const mockAvailableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const mockDispatch = jest.fn();
    
    render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);
    const labelElement = screen.getByText("Occasion");
    expect(labelElement).toBeInTheDocument();
});
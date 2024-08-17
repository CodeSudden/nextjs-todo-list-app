import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import InputForm from '../components/InputForm';

describe('InputForm Component', () => {
    test('adds a new task', () => {
        const mockAddItem = jest.fn(); // Mock function to simulate adding a task
        const mockUpdateInput = jest.fn();
        
        // Render the component with necessary props
        render(
            <InputForm
                userInput=""
                editIndex={null}
                updateInput={mockUpdateInput}
                handleAction={mockAddItem}
            />
        );

        // Find the input element and the add button
        const inputElement = screen.getByPlaceholderText("Add a task");
        const addButton = screen.getByRole("button");

        // Simulate typing into the input
        fireEvent.change(inputElement, { target: { value: 'New Task' } });

        // Simulate clicking the add button
        fireEvent.click(addButton);

        // Check if the mock function was called with the correct arguments
        expect(mockUpdateInput).toHaveBeenCalledWith('New Task');
        expect(mockAddItem).toHaveBeenCalled();
    });
});

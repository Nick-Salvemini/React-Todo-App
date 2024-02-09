import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

describe('NewTodoForm component', () => {
    it('renders without crashing', () => {
        render(<NewTodoForm addTodo={() => { }} />);
    });

    it('matches snapshot', () => {
        const { container } = render(<NewTodoForm addTodo={() => { }} />);
        expect(container).toMatchSnapshot();
    });

    it('calls addTodo function with form data on submission', () => {
        const addTodoMock = jest.fn();
        const { getByLabelText, getByText } = render(<NewTodoForm addTodo={addTodoMock} />);

        fireEvent.change(getByLabelText(/task/i), { target: { value: 'Sample task' } });
        fireEvent.click(getByText(/add new task/i));

        expect(addTodoMock).toHaveBeenCalledWith({ task: 'Sample task' });
    });
});
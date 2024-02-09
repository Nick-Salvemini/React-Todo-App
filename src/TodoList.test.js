import React from "react";
import { render } from "@testing-library/react";
import TodoList from "./TodoList";

describe('TodoList component', () => {
    it('renders without crashing', () => {
        render(<TodoList />);
    });

    it('matches snapshot', () => {
        const { container } = render(<TodoList />);
        expect(container).toMatchSnapshot();
    });
});
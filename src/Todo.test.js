import React from 'react';
import { render } from '@testing-library/react';
import Todo from './Todo';

describe('Todo component', () => {
    it('renders without crashing', () => {
        render(<Todo task="Sample task" remove={() => { }} />);
    });

    it('matches snapshot', () => {
        const { container } = render(<Todo task="Sample task" remove={() => { }} />);
        expect(container).toMatchSnapshot();
    });
});
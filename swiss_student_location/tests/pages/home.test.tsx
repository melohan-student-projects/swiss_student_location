import * as React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
// @ts-ignore
import Home from '@pages/home';

describe('Home', () => {
    test('renders welcome text', () => {
        render(<Home/>);
        const welcomeText = screen.getByText('Bienvenue sur Swiss Student Location !');
        expect(welcomeText).toBeInTheDocument();
    });
});
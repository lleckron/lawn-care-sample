import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LawnCareHeader from './LawnCareHeader';

describe('<LawnCareHeader />', () => {
  test('it should mount', () => {
    render(<LawnCareHeader />);
    
    const lawnCareHeader = screen.getByTestId('LawnCareHeader');

    expect(lawnCareHeader).toBeInTheDocument();
  });
});
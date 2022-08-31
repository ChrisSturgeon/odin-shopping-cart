import React from 'react';
import { render, screen } from '@testing-library/react';
import Shop from '../components/Shop';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('Shop tests', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Shop totalPrice={56} add={jest.fn()} />
      </BrowserRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders total value', () => {
    render(
      <BrowserRouter>
        <Shop totalPrice={56} add={jest.fn()} />
      </BrowserRouter>
    );
    const valueDiv = screen.getByTestId('totalValue');

    expect(valueDiv).toHaveTextContent('£56 total');
  });

  it('renders number of items', () => {
    render(
      <BrowserRouter>
        <Shop items={3} totalPrice={22} add={jest.fn()} />
      </BrowserRouter>
    );
    const valueDiv = screen.getByTestId('totalItems');

    expect(valueDiv).toHaveTextContent('3 items in cart');
  });
});

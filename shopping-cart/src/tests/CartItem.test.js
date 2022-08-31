import React from 'react';
import { render, screen } from '@testing-library/react';
import CartItem from '../components/CartItem';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('CartItem tests', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <CartItem price={17.99} album="Bitches Brew" artist="Miles Davis" />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders artist name', () => {
    render(
      <CartItem price={17.99} album="Bitches Brew" artist="Miles Davis" />
    );
    expect(screen.getByText('Miles Davis')).toBeInTheDocument();
  });

  it('renders album name', () => {
    render(
      <CartItem price={17.99} album="Bitches Brew" artist="Miles Davis" />
    );
    expect(screen.getByText('Bitches Brew')).toBeInTheDocument();
  });

  it('renders correct quantity name', () => {
    render(
      <CartItem
        price={17.99}
        album="Bitches Brew"
        artist="Miles Davis"
        quantity={22}
      />
    );
    expect(screen.getByText('Quantity: 22')).toBeInTheDocument();
  });
});

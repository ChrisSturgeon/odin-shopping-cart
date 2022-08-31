import React from 'react';
import { render, screen } from '@testing-library/react';
import Item from '../components/Item';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('Item Tests', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <Item price="17.99" album="Giant Steps" artist="John Coltrane" />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders album name', () => {
    render(<Item price="17.99" album="Giant Steps" artist="John Coltrane" />);
    expect(screen.getByText('Giant Steps')).toBeInTheDocument();
  });

  it('renders artist name', () => {
    render(<Item price="17.99" album="Giant Steps" artist="John Coltrane" />);
    expect(screen.getByText('John Coltrane')).toBeInTheDocument();
  });

  it('button renders correct text from initial state', () => {
    render(<Item price="17.99" album="Giant Steps" artist="John Coltrane" />);

    const addBtn = screen.getByRole('button', { name: 'Add to cart' });

    expect(addBtn).toHaveTextContent('Add to cart');
  });

  it('add to cart button renders correct text on click', () => {
    render(
      <Item
        price="17.99"
        album="Giant Steps"
        artist="John Coltrane"
        add={jest.fn()}
      />
    );
    const addBtn = screen.getByRole('button', { name: 'Add to cart' });

    userEvent.click(addBtn);

    expect(addBtn).toHaveTextContent('Success!');
  });

  it('quantity increases on increment button click', async () => {
    render(
      <Item
        price="17.99"
        album="Giant Steps"
        artist="John Coltrane"
        add={jest.fn()}
      />
    );
    const incrementBtn = screen.getByRole('button', { name: '+' });
    const quantity = screen.getByTestId('quantity');

    userEvent.click(incrementBtn);

    expect(quantity).toHaveTextContent('2');
  });

  it('quantity does not decrease below 1 on decrement button click', async () => {
    render(
      <Item
        price="17.99"
        album="Giant Steps"
        artist="John Coltrane"
        add={jest.fn()}
      />
    );
    const decrementBtn = screen.getByRole('button', { name: '-' });
    const quantity = screen.getByTestId('quantity');

    userEvent.click(decrementBtn);

    expect(quantity).toHaveTextContent('1');
  });

  it('decrement btn decreases quantity', async () => {
    render(
      <Item
        price="17.99"
        album="Giant Steps"
        artist="John Coltrane"
        add={jest.fn()}
      />
    );
    const incrementBtn = screen.getByRole('button', { name: '+' });
    const decrementBtn = screen.getByRole('button', { name: '-' });
    const quantity = screen.getByTestId('quantity');

    userEvent.click(incrementBtn);
    userEvent.click(incrementBtn);
    userEvent.click(decrementBtn);

    expect(quantity).toHaveTextContent('2');
  });
});

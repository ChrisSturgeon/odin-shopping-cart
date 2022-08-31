import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('NavBar component', () => {
  it('renders the correct heading', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(screen.getByText('React Records')).toBeInTheDocument();
  });

  it('renders snapshot', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

it('has correct home link text', () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  expect(screen.getByTestId('homeLink')).toHaveTextContent('React Records');
});

it('home link has correct class', () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  expect(screen.getByText('React Records')).toHaveClass('active');
});

it('router applies active styling to clicked link', () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  const aboutLink = screen.getByRole('link', { name: 'About' });

  userEvent.click(aboutLink);

  expect(aboutLink).toHaveClass('active');
});

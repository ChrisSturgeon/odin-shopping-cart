# React Records Store

## Table of Contents

- [Overview](#overview)
- [Built With](#built-with)
- [Features](#features)
- [Concepts and Ideas Learnt](#concepts-and-ideas-learnt)
- [Areas to Improve](#areas-to-improve)
- [Contact](#contact)

## Overview

The shopping cart project from the _React JS_ module of [The Odin Project](https://www.theodinproject.com/). The aim was to create a shop with React for a fictional store, where users can add items to a cart in a shop page and review their order before checkout.

Try the live project [here](https://chrissturgeon.github.io/odin-shopping-cart/#/shop) and view the project guidelines [here](https://www.theodinproject.com/lessons/node-path-javascript-shopping-cart).

![Shop screenshot](/shopping-cart/src/imgs/screenshot.jpg 'Shop Page')

### Built With

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/en/main)
- [Javascript](https://www.javascript.com/)
- HTML
- CSS

## Features

- Uses React components to dynamically generate shop items, allowing for quick and easy addition of new records.
- React state is used to track items in the user's cart, allowing for total number of items and total price to be reused and updated throughout the app.
- Shop items are displayed with an expanding/contracting CSS grid to optimise the number of items shown per row to the users screen size.

### Concepts and Ideas Learnt

- This was my first significant use of **React Router** to allow users to navigate between different pages, and pass state between them.
- I have used **CSS media queries, grid and flexbox** on previous projects to make some aspects of the design responsive, however this is the first project which I've made to be usable across a range of screen sizes.
- Similarly, this was the first project in which I used **React Testing Library** in conjunction with Jest to ensure components were rendering correctly for given state mocks. Tests used include snapshots, toHaveClass and toBeInTheDocument.
- How to use **images** for dynamic generation within React.
- Use of **CSS Transform** to roatate the record SVG on the homepage on hover.

### Areas to Improve

If I was to remake or improve this project I would:

- Add more animations to give more of an interactive feel.
- Create a slide-in modal to display the checkout page and summary for mobile users.
- Allow users to leave rate and leave reviews of albums.
- Change the colour scheme, as whilst the yellow background is pleasing on some screens, it can be a little nausea inducing on others.

## Contact

- sturgeon.chris@gmail.com
- [LinkedIn](https://www.linkedin.com/in/chris-sturgeon-36a74254/)

# Restaurant Ordering App

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Project Structure](#project-structure)
5. [Installation](#installation)
6. [Usage](#usage)
7. [State Management](#state-management)
8. [API Integration](#api-integration)
9. [Contributing](#contributing)
10. [License](#license)

---

## Overview

This is a React-based restaurant ordering application where users can browse a menu, order pizzas, and track their orders using a unique order ID. The app provides a seamless experience with an intuitive UI, state management using Redux, and smooth animations with Framer Motion.

# Restaurant Ordering App

## Live Demo

[Live Website](https://resturant-io.vercel.app/)

## Features

- Browse available pizzas from the menu
- Add items to the cart with quantity management
- Create an order, generating a unique order ID
- Track orders using the provided order ID
- User authentication for personalized experience (if implemented)
- Responsive design for both desktop and mobile views

## Tech Stack

- **React** – Frontend framework
- **Redux Toolkit** – State management
- **React Router** – Client-side routing
- **Tailwind CSS** – Styling and UI components
- **Framer Motion** – Animations
- **Vite** – Development and build tool

## Project Structure

```
public/
src/
├── features/
│   ├── cart/
│   ├── menu/
│   ├── order/
│   ├── user/
├── services/
├── ui/
├── utils/
├── App.jsx
├── main.jsx
├── store.js
.eslintrc.cjs
.gitignore
README.md
index.html
package.json
vite.config.js
```

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo-name.git
   ```
2. Navigate to the project directory:
   ```sh
   cd restaurant-ordering-app
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## Usage

- Open the app in your browser (default: `http://localhost:5173`)
- Browse the menu and add items to your cart
- Proceed to checkout and create an order
- Use the generated order ID to track your order status

## State Management

The app uses **Redux Toolkit** to manage global state. The following slices handle specific functionalities:

- `cartSlice.js` – Manages cart items and quantities
- `userSlice.js` – Handles user information
- `store.js` – Configures the Redux store

## API Integration

The app interacts with APIs for various functionalities:

- `apiGeocoding.js` – Handles geolocation-based address fetching
- `apiRestaurant.js` – Manages restaurant menu and order data
- `dataLoaders.js` – Loads initial data for the app

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

## License

This project is licensed under the MIT License.

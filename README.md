# Currency Exchange Rate App

This is a React application that fetches and displays currency exchange rates using the Free Currency API. It utilizes Vite for project setup, Tailwind CSS for styling, and the Free Currency API for fetching current exchange rates.

## Features

- Displays currency exchange rates for various currencies relative to a base currency.
- Allows users to select a base currency and see exchange rates for other currencies.
- Responsive design for mobile and desktop.

## Technologies Used

- [Vite](https://vitejs.dev/): A next-generation frontend tooling, serving pre-configured development setups for modern web projects.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for creating custom designs quickly.
- [Free Currency API](https://freecurrencyapi.com/): An API for fetching current and historical exchange rates.

## Installation

1. Clone the repository:


2. Navigate into the project directory:


3. Install dependencies:


## Usage

1. Start the development server:


2. Open your web browser and go to [http://localhost:3000](http://localhost:3000) to view the app.

3. Select a base currency from the dropdown menu to see exchange rates for other currencies.

## API Key

This application uses the Free Currency API to fetch exchange rates. You need to sign up on the Free Currency API website to obtain an API key. Once you have the API key, replace `YOUR_API_KEY` in the `useCurrencyInfo` hook with your actual API key.

## Contributing

Contributions are welcome! Please follow the guidelines below:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -am 'Add new feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.
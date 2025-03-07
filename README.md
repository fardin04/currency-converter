
# Currency Converter App

A simple Currency Converter app built with React, allowing users to convert between different currencies with real-time exchange rates.

## Features

- Convert currencies between different types (e.g., USD to BDT).
- Displays live exchange rates fetched from an external API.
- Swap currencies with a simple button click.
- Input fields for both the amount and currency selection.

## Technologies Used

- **React.js** - For building the user interface.
- **Tailwind CSS** - For styling the application.
- **useEffect** and **useState** - For managing side effects and component state.
- **Currency Layer API** - For fetching real-time exchange rates.

## Setup Instructions

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/currency-converter.git
    ```

2. Navigate to the project folder:

    ```bash
    cd currency-converter
    ```

3. Install the necessary dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm start
    ```

5. Visit `http://localhost:3000` in your browser to view the app.

## How to Use

1. Enter the amount you wish to convert.
2. Select the "From" currency and "To" currency from the dropdown lists.
3. Press the "Convert" button to see the converted amount.
4. Optionally, click the "⇄ Swap" button to switch the "From" and "To" currencies.

## Code Structure

- **App.jsx**: Main component that manages state and handles currency conversion.
- **Input.jsx**: A reusable input component for both currency amount and type.
- **useCurrencyInfo.js**: Custom hook to fetch currency data from the API.

## Dependencies

- `react`: For building the application.
- `tailwindcss`: For styling.
- `useEffect`, `useState`: For handling API data fetching and state management.

## Contributing

Feel free to fork the project and submit a pull request if you have any improvements or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

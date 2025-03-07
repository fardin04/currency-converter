import { useState } from 'react';
import './App.css';
import Input from './components/Input';
import useCurrencyInfo from './customHooks/useCurrencyInfo';
import currencyConverterBg from './assets/currencyConverterBg.jpeg';

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('bdt');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const { rates, loading, error } = useCurrencyInfo(from);
  const currencyOptions = rates ? Object.keys(rates) : [];

  const swapCurrency = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    setConvertedAmount(amount * (rates[to] || 1));
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white p-6"
      style={{ backgroundImage: `url(${currencyConverterBg})` }}
    >
      <h1 className="text-4xl font-bold bg-black/50 px-6 py-3 rounded-lg mb-6">Currency Converter</h1>

      <div className="w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5 backdrop-blur-md bg-white/20 shadow-lg">
        {loading ? (
          <p className="text-center text-yellow-400">Loading exchange rates...</p>
        ) : error ? (
          <p className="text-center text-red-500">Error: {error}</p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-3">
              <Input
                label="From"
                amount={amount}
                currencyOptions={currencyOptions}
                onCurrencyChange={setFrom}
                selectCurrency={from}
                onAmountChange={setAmount}
              />
            </div>

            <div className="relative w-full flex justify-center my-3">
              <button
                type="button"
                className="border-2 border-white rounded-full bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 transition"
                onClick={swapCurrency}
              >
                ⇄ Swap
              </button>
            </div>

            <div className="w-full mb-4">
              <Input
                label="To"
                amount={convertedAmount}
                currencyOptions={currencyOptions}
                onCurrencyChange={setTo}
                selectCurrency={to}
                amountDisable
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default App;

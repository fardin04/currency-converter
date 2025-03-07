import React, { useId } from 'react';

function Input({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = 'usd',
  amountDisable = false,
  currencyDisable = false,
}) {
  const amountInputId = useId();

  return (
    <div className="bg-black/50 p-4 rounded-lg text-white flex flex-col gap-2 shadow-md">
      <label htmlFor={amountInputId} className="text-white/60 text-sm">
        {label}
      </label>
      <input
        id={amountInputId}
        className="w-full p-3 bg-white/80 text-black rounded-md outline-none border-none focus:ring-2 focus:ring-blue-500"
        type="number"
        placeholder="Enter amount"
        disabled={amountDisable}
        value={amount}
        onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
      />
      <label className="text-white/60 text-sm">Currency Type</label>
      <select
        className="w-full p-3 bg-white/80 text-black rounded-md cursor-pointer outline-none border-none focus:ring-2 focus:ring-blue-500"
        value={selectCurrency}
        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        disabled={currencyDisable}
      >
        {currencyOptions.length > 0 ? (
          currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))
        ) : (
          <option value="">No currencies available</option>
        )}
      </select>
    </div>
  );
}

export default Input;

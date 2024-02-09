import React, { useId } from "react";

function InputBox({ 
    // Here, we've destructure the props
        label,
        amount, // To show on input box
        onAmountChange, // If amount is changed then you need to change the state also. // It's a method
        onCurrencyChange,  // If currency is changed then you need to change the state
        currencyOptions = [],
        selectCurrency = "usd", // By default it's usd
        amountDisable = false, // user can change the amount // optional
        currencyDisable = false, 
        className = "",

    }) { 

        // Optimization for label
        // label will change each time 
        // Each html have accessibility attributes by this if user want to take access of anything then he can take it.
        // But its mapping is sometimes difficult.
        // To avoid that we bind unique value between label and input
        // 'But don't use useId for generating unique key for lists' - React
        const amountInputId = useId(); // It will give you unique id or value

    return (
        // If the user send it's own classes then it will be added here.
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} // If onAmountChange is exist then use ()
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    
                        {
                            currencyOptions.map((currency) => (
                                // Remember the key in loop. If you don't add key in loops then react's performance will go down.
                                <option key={currency} value={currency}>
                                    {currency}
                                </option>
                            ))
                        }
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
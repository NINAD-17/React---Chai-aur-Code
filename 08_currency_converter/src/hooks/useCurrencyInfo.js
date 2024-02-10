// Custom Hook - useCurrencyInfo
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({}); // If there's no data returned then default value is {}

    useEffect(() => {
        console.log({currency});
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]));
        
    }, [currency]); // Whenever any change happen in currency then refresh it.

    console.log(data);
    return data; // If you return only data then how will you able to setData?
    // for this you need to return whole function in export.
    // Here whole method is returns and function returns data. So you get access.
}

export default useCurrencyInfo;
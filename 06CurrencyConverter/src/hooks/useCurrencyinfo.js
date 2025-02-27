import { useState, useEffect } from "react";
function useCurrencyinfo(Currency) {
  const [Data, SetData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${Currency}.json`
    )
      .then((res) => res.json())
      .then((res) => SetData(res[Currency]));
  }, [Currency]);
  return Data;
}

export default useCurrencyinfo;

import { useState,useEffect } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_bzSjh8BsntQu6E3XeuPJomVNuO4c6GTF7krVk7Wg&base_currency=${currency}`)
        .then((res) => res.json())
        .then((res) => {
            const extractedData = res.data
            setData(extractedData)
            console.log(data)
        })
    }, [currency])
    return data;
}

export default useCurrencyInfo;
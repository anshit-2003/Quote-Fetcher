import { useEffect, useState } from "react";

export default function Quote() {
    const [quote, setQuote] = useState({ Quote: "", author: "" });
    const [isloading, setLoading] = useState(true);
    useEffect(() => {
        getQuote();
    }, []);
    async function getQuote() {
        const response = await fetch(
            "http://inspo-quotes-api.herokuapp.com/quotes/random"
        );
        const jsonresponse = await response.json();
        const quote = jsonresponse.quote;
        setQuote({ Quote: quote.text, author: quote.author });
        setLoading(false);
    }
    return (
        <div>
            {isloading && <p>Loading...</p>}
            <h1>{quote.Quote}</h1>
            <h3>{quote.author}</h3>
            <button onClick={getQuote}>Regenerate Quote!</button>
        </div>
    );
}

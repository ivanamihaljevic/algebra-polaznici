import React, { useState, useEffect } from "react";

const KanyeQuote = ({ quote }) => {
    return (<h2>{quote}</h2>);
};

export default function API() {
    const [data, setData] = useState(null);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        fetch("https://api.kanye.rest/")
            .then((response) => response.json())
            .then((nasaData) => setData(nasaData));
    }, []);

    if (!data) {
        return <h1>Loading Kanye data</h1>;
    }

    const { quote } = data;

    return (
        <div>
            <h1>Kanye West Quote of the Day</h1>
            <KanyeQuote quote={quote} />
        </div>
    );
}

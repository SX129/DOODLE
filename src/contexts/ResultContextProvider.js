import React, { createContext, useContext, useState } from 'react';

/*Implementing Google Search API*/
const ResultContext = createContext();
const baseUrl = 'https://google-search72.p.rapidapi.com';

/*Using states to return the results of the API request*/
export const ResultContextProvider = ({children}) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const getResults = async (urlType) => {
        setIsLoading(true);

        const response = await fetch(`${baseUrl}${urlType}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
            }
        });

        const data = await response.json();

        console.log({urlType, data});
        //setResults(data);
        
        setIsLoading(false);
    }

    return(
        <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>
            {children}
        </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext);
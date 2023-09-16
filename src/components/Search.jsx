import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { useResultContext } from '../contexts/ResultContextProvider';
import { Links } from './Links';

/*Component for search bar*/
export const Search = () => {
    const [text, setText] = useState('');
    const { setSearchTerm } = useResultContext();
    const [debounceValue] = useDebounce(text, 500);

    /*Hook performed when a user types into the search bar to limit the amount of GET requests to the API until x amount of time or when they press enter*/ 
    useEffect(() => {
        if(debounceValue){
            setSearchTerm(debounceValue)
        }
    }, [debounceValue])

    return (
        <div className='relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3'>
            <input
                value={text}
                type='text'
                className='sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg'
                placeholder='Search Doodle'
                onChange={(e) => setText(e.target.value)}
            />
            {!text && (
                <button type='button' className='absolute top-1.5 right-4 text-2xl text-gray-500' onClick={() => setText('')}>
                    x
                </button>
            )}
            <Links />
        </div>
    )
}

import React, { useState } from 'react';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Routez } from './components/Routez';

/*Main app component used to render components with syling options for light/dark mode*/
const App = () => {

    const [darkTheme, setDarkTheme] = useState(false);

    return (
        <div className={darkTheme ? 'dark' : ''}>
            <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen'>
                <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
                <Routez />
                <Footer />
            </div>
        </div>
  )
}

export default App
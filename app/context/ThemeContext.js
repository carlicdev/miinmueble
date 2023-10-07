"use client"

import { createContext, useState } from 'react'

export const ThemeContext = createContext();

const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState('light');
    
    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
    }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className={`theme ${theme}`}>
            {children}
        </div>
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
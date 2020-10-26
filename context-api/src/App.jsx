import React from 'react'
import Navbar from './components/Navbar'
import Principal from './components/Principal'
import ThemeProvider from './context/ThemeProvider'
import HolaProvider from './context/HolaProviders'

const App = () => {
  return (
    <HolaProvider>
      <ThemeProvider>
        <Navbar />
        <Principal />
      </ThemeProvider>
    </HolaProvider>

  );
}

export default App;

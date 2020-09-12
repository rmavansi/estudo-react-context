import React from 'react';

import Main from './pages/Main';

import ThemeProvider from './context/Theme';

import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <Main />
      </ThemeProvider>
    </>
  )
}

export default App;
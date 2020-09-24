import React from 'react';
import './App.css';
import theme from './lib/theme';
import Button from './lib/Button';
import { ThemeProvider } from 'styled-jss';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Button type='button' value='Styled JSS Button'/>
      </ThemeProvider>
    </div>
  );
}

export default App;

import React, { Fragment } from 'react';
import "./App.css";
import { ThemeProvider, Button, theme, Icon } from "./lib";

const styles = {
  button: {
    marginRight: 8
  }
}

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Fragment>
          <Button type='filled' style={styles.button}>
            <Icon></Icon>
            Filled Button</Button>
          <Button type='outline' style={styles.button}>Outline Button</Button>
          <Button type='text' style={styles.button}>Text Button</Button>
        </Fragment>
      </ThemeProvider>
    </div>
  );
}

export default App;

import React, { Fragment } from 'react';
import "./App.css";
import { ThemeProvider, Button, theme, Icon } from "./lib";
import Row from './lib/Row';
import Grid from './lib/Col';

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
          <Row>
            <Grid md={12} lg={6} style={{ backgroundColor: '#eee', height: 50}}>1</Grid>
            <Grid  md={12} lg={6} style={{ backgroundColor: '#ddd', height: 50}}>2</Grid>
            <Grid  md={12} lg={6} style={{ backgroundColor: '#eee', height: 50}}>3</Grid>
            <Grid  md={12} lg={6} style={{ backgroundColor: '#ddd', height: 50}}>4</Grid>
          </Row>
        </Fragment>
      </ThemeProvider>
    </div>
  );
}

export default App;

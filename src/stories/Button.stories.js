import React, {Fragment} from 'react';
import Button from '../lib/Button';
import theme from '../lib/theme';
import ThemeProvider from "../lib/ThemeProvider";

// 你的頁面標題
export default {
    component: Button,
    title: 'Components/Button',
};


const styles = {
    button: {
      marginRight: 8
    }
  }

const Template = args => {

    return (
        <ThemeProvider theme={theme}>
            <Fragment>
            <Button type='filled' style={styles.button}>
            Filled Button</Button>
          <Button type='outline' style={styles.button}>Outline Button</Button>
          <Button type='text' style={styles.button}>Text Button</Button>
          </Fragment>
        </ThemeProvider>
    );
}

export const Default = Template.bind({});

Default.args = {
    type: 'filled',
};

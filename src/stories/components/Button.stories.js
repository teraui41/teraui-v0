import React, { Fragment } from "react";
import theme from "../../lib/theme";
import Button from "../../lib/Button/index";
import ThemeProvider from "../../lib/ThemeProvider";

const styles = {
  button: {
    marginRight: 8,
  },
};

const Provider = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

const Template = (args) => {
  return (
    <Provider>
      <Fragment>
        <Button type='filled' style={styles.button}>
          Filled Button
        </Button>
        <Button type='outline' style={styles.button}>
          Outline Button
        </Button>
        <Button type='text' style={styles.button}>
          Text Button
        </Button>
      </Fragment>
    </Provider>
  );
};

export const Default = Template.bind({});

// 你的頁面標題
export default {
  component: Button,
  title: "Components/Button",
};

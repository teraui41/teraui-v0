import React, { Fragment } from "react";
import theme from "../../lib/theme";
import Switch from "../../lib/Switch";
import ThemeProvider from "../../lib/ThemeProvider";

const Provider = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

const Template = args => {
  return (
      <Provider>
        <Fragment>
            <Switch />
        </Fragment>
      </Provider>
  );
}

export const Default = Template.bind({});

export default {
  component: Switch,
  title: "Form/Switch",
};

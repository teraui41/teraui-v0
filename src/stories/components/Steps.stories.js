import React, { Fragment } from "react";
import theme from "../../lib/theme";
import Steps from "../../lib/Steps";
import ThemeProvider from "../../lib/ThemeProvider";

const steps = [1, 2, 3];
const active = [1, 2];

const Provider = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

const Template = (args) => {
  return (
    <Provider>
      <Fragment>
        <Steps {...args} />
      </Fragment>
    </Provider>
  );
};

export const Default = Template.bind({});
Default.args = {
  steps,
  active,
};

// 你的頁面標題
export default {
  component: Steps,
  title: "Components/Steps",
};

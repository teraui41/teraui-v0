import React, { Fragment } from "react";
import theme from "../../lib/theme";
import Icon from "../../lib/Icon/index";
import ThemeProvider from "../../lib/ThemeProvider";

const Provider = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

const Template = args => {
  return (
      <Provider>
        <Fragment>
          <Icon icon='fa-user' color='#ddd' size={40}/>
          <Icon icon='fa-user' color='#888' size={30}/>
          <Icon icon='fa-user' color='#555' size={20}/>
          <Icon icon='fa-user' color='#111' size={10}/>
        </Fragment>
      </Provider>
  );
}

export const Default = Template.bind({});

export default {
  component: Icon,
  title: "Components/Icon",
};

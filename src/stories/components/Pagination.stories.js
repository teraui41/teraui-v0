import React from "react";
import theme from "../../lib/theme";
import Pagination from '../../lib/Pagination';
import ThemeProvider from "../../lib/ThemeProvider";

const Provider = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

const Template = args => {
  return (
      <Provider>
          <Pagination {...args}/>
      </Provider>
  );
}

export const Default = Template.bind({});

Default.args = {
    current: 1,
    size: 10,
    total: 100
}

export default {
  component: Pagination,
  title: "Components/Pagination",
};

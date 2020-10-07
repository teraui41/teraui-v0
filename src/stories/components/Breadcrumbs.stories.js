import React, { Fragment } from "react";
import theme from "../../lib/theme";
import Button from "../../lib/Button/index";
import ThemeProvider from "../../lib/ThemeProvider";
import Breadcrumbs from '../../lib/Breadcrumbs';

const paths = [
  {
    text: 'path 1',
  },
  {
    text: 'path 2',
    path: '/'
  },
  {
    text: 'path 3',
    path: '/'
  }
]

const Provider = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

const Template = (args) => {
  return (
    <Provider>
      <Fragment>
        <Breadcrumbs paths={paths}/>
      </Fragment>
    </Provider>
  );
};

export const Default = Template.bind({});

// 你的頁面標題
export default {
  component: Breadcrumbs,
  title: "Components/Breadcrumbs",
};

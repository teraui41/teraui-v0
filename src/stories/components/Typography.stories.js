import React, { Fragment } from "react";
import theme from "../../lib/theme";
import Typography from "../../lib/Typography";
import ThemeProvider from "../../lib/ThemeProvider";

const Provider = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

const Template = (args) => {
  return (
    <Provider>
      <Fragment>
        <Typography variant='h1'>H1 Typography</Typography>
        <Typography variant='h2'>H2 Typography</Typography>
        <Typography variant='h3'>H3 Typography</Typography>
        <Typography variant='h4'>H4 Typography</Typography>
        <Typography variant='h5'>H5 Typography</Typography>
        <Typography variant='h6'>H6 Typography</Typography>
        <Typography variant='content'>content</Typography>
      </Fragment>
    </Provider>
  );
};

export const Default = Template.bind({});

export default {
  component: Typography,
  title: "Components/Typography",
};

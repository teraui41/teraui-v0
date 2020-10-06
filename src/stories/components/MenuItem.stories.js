import React, { Fragment, useState } from "react";
import isEmpty from "lodash/isEmpty";
import Menu from "../../lib/Menu";
import theme from "../../lib/theme";
import NavBar from "../../lib/NavBar";
import Content from "../../lib/Content";
import BrandNav from "../../lib/BrandNav";
import MenuItem from "../../lib/MenuItem";
import Collapse from "../../lib/Collapse";
import Container from "../../lib/Container";
import ThemeProvider from "../../lib/ThemeProvider";

const MenuConfig = [
  {
    text: "Menu 1",
    icon: "fa-user",
  },
  {
    text: "Menu 2",
    icon: "fa-user",
    children: [{ text: "Menu sec" }],
  },
  {
    text: "Menu 3",
    icon: "fa-user",
    children: [{ text: "Menu sec", children: [{ text: "Menu third" }] }],
  },
];

const Provider = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

const MenuWithChild = ({ item, hasChild, ...props }) => {
  const [open, setOpen] = useState(false);

  const handleOnClick = () => {
    setOpen(!open)
  }

  return (
    <Fragment>
      <MenuItem hasChild open={open} text={item.text} icon={item.icon} onClick={handleOnClick} />
      <Collapse open={open}>
        <MenuItems items={item.children}/>
      </Collapse>
    </Fragment>
  );
};

const MenuItems = ({ items, ...props }) => {
  return items.map((item, index) => {
    const hasChild = !isEmpty(item.children) && item.children.length > 0;
    return hasChild ? (
      <MenuWithChild key={`MenuItem_${index}`} item={item} hasChild/>
    ) : (
      <MenuItem key={`MenuItem_${index}`} text={item.text} icon={item.icon} />
    );
  });
};

const Template = (props) => {
  return (
    <Provider>
      <Container
        width='100vw'
        height='100vh'
        maxHeight='400px'
        maxWidth='960px'
      >
        <NavBar></NavBar>
        <Menu>
          <BrandNav></BrandNav>
          <MenuItems items={MenuConfig} />
        </Menu>
        <Content>
          <h1> MenuItem Demo ...</h1>
        </Content>
      </Container>
    </Provider>
  );
};

export const Default = Template.bind({});

export default {
  component: MenuItem,
  title: "Components/MenuItem",
};

import React from 'react';
import Menu from '../../lib/Menu';
import theme from "../../lib/theme";
import NavBar from '../../lib/NavBar';
import Content from '../../lib/Content';
import BrandNav from '../../lib/BrandNav';
import Container from '../../lib/Container';
import ThemeProvider from "../../lib/ThemeProvider";


const Provider = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

const Template = props => {
  return (
    <Provider>
      <Container width='100vw' height='100vh' maxHeight='400px' maxWidth='960px'>
        <NavBar></NavBar>
        <Menu>
          <BrandNav>
          </BrandNav>
        </Menu>
        <Content>
          <h1>Something ...</h1>
        </Content>
      </Container>
    </Provider>
  )
}

export const Default = Template.bind({});

export default {
  component: NavBar,
  title: 'Layout/Layout'
};
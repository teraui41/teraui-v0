import React from "react";
import Col from "../../lib/Col";
import Row from "../../lib/Row";
import Grid from "../../lib/Grid";
import theme from "../../lib/theme";
import ThemeProvider from "../../lib/ThemeProvider";

const styles = {
  bg_1: {
    padding: theme.getSpacing(2),
    backgroundColor: theme.colors.grey1,
  },
  bg_2: {
    padding: theme.getSpacing(2),
    backgroundColor: theme.colors.grey2,
  },
};

const Provider = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

const Template = (args) => {
  return (
    <Provider>
      <Grid width='100vw' maxWidth='1000px' >
        <Row>
          <Col sm={12} md={6} lg={4} style={styles.bg_1}>1</Col>
          <Col sm={12} md={6} lg={4} style={styles.bg_2}>2</Col>
          <Col sm={12} md={6} lg={4} style={styles.bg_1}>3</Col>
          <Col sm={12} md={6} lg={4} style={styles.bg_2}>4</Col>
        </Row>
        <Row>
          <Col sm={12} md={6} lg={4} style={styles.bg_2}>5</Col>
          <Col sm={12} md={6} lg={4} style={styles.bg_1}>6</Col>
          <Col sm={12} md={6} lg={4} style={styles.bg_2}>7</Col>
          <Col sm={12} md={6} lg={4} style={styles.bg_1}>8</Col>
        </Row>
      </Grid>
    </Provider>
  );
};

export const GridSystem = Template.bind({});

export default {
  component: Col,
  title: "Layout/Grid",
};

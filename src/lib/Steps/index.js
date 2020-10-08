import React, { Fragment } from "react";
import styled from "styled-jss";
import propTypes from "prop-types";

const StyledStep = styled("span")({
  width: 10,
  height: 10,
  display: "block",
  borderRadius: 20,
  lineHeight: "10px",
  textAlign: "center",
  padding: ({ theme }) => theme.getSpacing(1),
  color:  ({ theme, active, step }) => active.includes(step) ? theme.colors.white: theme.colors.grey4,
  backgroundColor: ({ theme, active, step }) => active.includes(step) ? theme.colors.primary: theme.colors.grey1,
});

const StyledStepsContainer = styled("div")({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const Separator = styled("div")({
  flex: 1,
  height: 1,
  border: '5px solid #fff',
  display: ({ hide }) => (hide ? "none" : "block"),
  backgroundColor: ({ theme }) => theme.colors.grey1,
  borderBottom: ({ theme }) => `1px solid ${theme.colors.grey1}px`,
});

const Step = ({ step, active }) => {
  return <StyledStep step={step} active={active}>{step}</StyledStep>;
};

const Steps = ({ steps, active }) => {
  return (
    <StyledStepsContainer>
      {steps.map((step, index) => {
        const showSeparator = steps.length - 1 === index;
        return (
          <Fragment>
            <Step step={step} active={active} />
            <Separator hide={showSeparator} />
          </Fragment>
        );
      })}
    </StyledStepsContainer>
  );
};

Steps.propTypes = {
  steps: propTypes.arrayOf(
    propTypes.oneOfType([propTypes.number, propTypes.string])
  ),
  active: propTypes.arrayOf(
    propTypes.oneOfType([propTypes.number, propTypes.string])
  ),
};

export default Steps;


import styled from 'styled-jss';
import isEmpty from 'lodash/isEmpty';
import breakpoint from "../constant/breakpoint";

const FromLabel = styled("label")({
  display: ({ children }) => isEmpty(children) ? 'none': 'initial',
  minWidth: 80,
  position: "relative",
  color: ({ theme }) => theme.colors.grey4,
  padding: ({ theme }) => `${theme.getSpacing(1)}px ${theme.getSpacing(1)}px`,
  "&::after": {
    position: "absolute",
    content: ({ required }) => (required ? '"*"' : '""'),
    color: ({ theme }) => theme.colors.danger,
    marginLeft: 2,
  },
  [breakpoint.mediaLG]: {
    padding: ({ theme }) => `${theme.getSpacing(1)}px ${theme.getSpacing(2)}px`,
    "&::after": {
      left: 2,
    },
  },
});

export default FromLabel;

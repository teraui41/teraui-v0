import styled from 'styled-jss';
import breakpoint from '../constant/breakpoint';

const ErrorMessage = styled("div")({
  color: ({ theme }) => theme.colors.danger,
  paddingLeft: ({ theme }) => theme.getSpacing(1),
  [breakpoint.mediaLG]: {
    paddingLeft: ({ theme }) => theme.getSpacing(15),
  },
});

export default ErrorMessage;
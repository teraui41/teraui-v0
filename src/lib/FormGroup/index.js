import styled from 'styled-jss';
import breakpoint from "../constant/breakpoint";

const FormGroup = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-star",
  [breakpoint.mediaLG]: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    boxSizing: "border-box",
  },
});

export default FormGroup;
import styled from "styled-components";
import * as Mui from "@mui/material";
import MainBg from "../assets/images/pexels-phiraphon-srithakae-11705209.jpg";

export const NavButton = styled(Mui.Button)({
  paddingTop: "10px",
  paddingBottom: "10px",
  height: "50px",
});

export const SearchBackgroundImageDiv = styled.div`
  background-image: url(${MainBg});
  background-attachment: fixed;
  background-size: cover;
  min-width: 20rem;
  // TODO - Fix image scaling for background
  /* background-size: 100%; */
  padding: 15% 10% 20% 10%;
  @media (max-width: 850px) {
    padding: 15% 5px 20% 5px;
  }
  border-radius: 5px;
`;

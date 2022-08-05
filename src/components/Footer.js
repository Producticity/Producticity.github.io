import React from "react";
import styled from "styled-components";
import NavLogo from "../assets/images/Navlogo.jpg";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";
const MainFooterContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  min-width: 20rem;
  background: #1d1d1d;
  margin-top: 1rem;
  // background:#f2f1ec;
  flex-direction: column;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;
const FooterInnerContainerrow = styled.div`
  width: 100%;
  min-width: 20rem;
  display: flex;
  margin: 2rem 0 1.5rem 0;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
const CopyrightContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  text-align: center;
  flex-direction: column;
`;
const ColumnContainer = styled.div`
  flex-basis: 33.33%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 839px) {
    flex-basis: 66.67%;
  }
  @media (max-width: 355px) {
    flex-basis: 100%;
    margin-top: 1rem;
  }
`;
const CompanyColumn = styled.div`
  width: 33.33%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  @media (max-width: 839px) {
    margin-top: 3rem;
  }
`;
const RowContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Logo = styled.img`
  width: 5rem;
  height: 3.5rem;
  align-items: center;
  cursor: pointer;
`;
const CopyrightText = styled.span`
  width: 100%;
  font-size: 18px;
  color: white;
  margin: 0.2rem 0 0.4rem 0;
`;
const Links = styled.div`
  font-size: 14px;
  color: white;
  margin-top: 0.5rem;
  text-align: center;
  &:hover {
    color: #2a48a4;
    border-bottom: 1px solid white;
    cursor: pointer;
  }
`;
const HeadingText = styled.div`
  text-align: center;
  align-items: center;
  font-size: 20px;
  color: white;
`;
const ContactUs = styled.span`
  width: 100%;
  font-size: 20px;
  color: white;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 0.5rem;
`;
const WhatsAppNo = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`;
const WhatsAppNoText = styled.span`
  display: none;
  ${WhatsAppNo}:hover & {
    display: block;
    min-width: 10rem;
    position: absolute;
    top: -1.5rem;
    left: -3.5rem;
    padding: 0.2rem 0;
    border-radius: 10px;
    font-weight: 500;
    right: 0;
    height: 3vh;
    color: black;
    background-color: white;
  }
`;
const Location = styled.span`
  width: 100%;
  margin-top: 1rem;
  font-weight: 500;
  text-align: center;
  color: white;
`;
const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <MainFooterContainer>
        <FooterInnerContainerrow>
          <ColumnContainer>
            <RowContainer onClick={() => navigate("/", { replace: true })}>
              <Logo src={NavLogo} alt="footer Logo" />
              <HeadingText>Find Your Best Real Estate</HeadingText>
            </RowContainer>
          </ColumnContainer>

          <CompanyColumn>
            <HeadingText>Company</HeadingText>
            <Links onClick={() => navigate("/about-us")}>About Us</Links>
            <Links onClick={() => navigate("/terms")}>Terms Of Use</Links>
            <Links onClick={() => navigate("/privacy")}>Privacy Policy</Links>
          </CompanyColumn>
          <ColumnContainer>
            <HeadingText>Contact Us</HeadingText>
            <Location>
              Empire Height Tower 1 Office P3 A-08 Business Bay Dubai
            </Location>
            <ContactUs>
              <a
                rel="noreferrer"
                href="https://www.facebook.com/FairyHomesDubai/"
                target="_blank"
              >
                <FacebookOutlinedIcon
                  htmlColor="white"
                  sx={{ "&:hover": { color: "blue", cursor: "pointer" } }}
                />
              </a>
              <a
                rel="noreferrer"
                href={"https://wa.me/+971523705872"}
                target="_blank"
              >
                <WhatsAppNo>
                  <WhatsAppIcon
                    htmlColor="white"
                    sx={{
                      marginLeft: "1rem",
                      "&:hover": { color: "green", cursor: "pointer" },
                    }}
                  />
                  <WhatsAppNoText>+971523705872</WhatsAppNoText>
                </WhatsAppNo>
              </a>
            </ContactUs>
          </ColumnContainer>
        </FooterInnerContainerrow>
        <CopyrightContainer>
          <Divider
            fullwidth
            style={{ margin: "0.5rem 0 0.5rem 0 ", backgroundColor: "white" }}
          />
          <CopyrightText>{`©${new Date().getFullYear()} All Rights Reserved by Fairy Homes.`}</CopyrightText>
        </CopyrightContainer>
      </MainFooterContainer>
    </>
  );
};

export default Footer;

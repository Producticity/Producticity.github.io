import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavButton } from "./StyledComponents";
import styled from "styled-components";
import NavLogo from "../assets/images/Navlogo.jpg";
import { useNavigate } from "react-router-dom";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const BoxShadowContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  min-width: 20rem;
  display: flex;
  flex-direction: row;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  background: white;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
`;
const NavbarContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  min-width: 20rem;
  display: flex;
  background: white;
  flex-direction: row;
  @media (max-width: 1182px) {
    width: 100%;
  }
`;
const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 18rem;
  height: 5rem;
  min-height: 4rem;
  max-height: 5rem;
  min-width: 4rem;
  cursor: pointer;
`;
const Logo = styled.img`
  width: 150px;
  height: 70px;
`;
const RightContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
const NavbarTitleLinks = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 1080px) {
    display: none;
  }
`;
const MobileNavMenu = styled.div`
  width: 100%;
  margin: 0 auto;
  min-width: 20rem;
  background: white;
  box-shadow: rgb(0 0 0 / 4%) 0px 16px 16px 0px;
  z-index: 999;
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1080px) {
    display: none;
  }
`;
const DrawerButton = styled.button`
  font-size: 60px;
  border: none;
  color: #2a48a4;
  background: none;
  cursor: pointer;
  @media (min-width: 1080px) {
    display: none;
  }
`;
const Navbar = ({ user, signOut }) => {
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isScrolled, setIsScrolled] = useState(null);
  const signoutClick = () => {
    signOut();
    navigate("/", { replace: true });
    setOpenDrawer(false);
  };
  const listenScrollEvent = (event) => {
    if (window.scrollY === 0) {
      return setIsScrolled(false);
    } else if (window.scrollY > 300) {
      return setIsScrolled(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <BoxShadowContainer>
      <NavbarContainer>
        <LeftContainer onClick={() => navigate("/", { replace: true })}>
          {/* <Logo src={NavLogo} alt="Logo" />
           */}
          <PhoneIphoneIcon fontSize="5px" color="gray" />
          <p style={{ fontSize: "15px" }}>For Inquiry </p>
          <p style={{ fontSize: "15px", fontWeight: "bold" }}>
            (+1) 4698 193 007
          </p>
        </LeftContainer>
        <RightContainer>
          {/* <NavbarTitleLinks>
            <NavButton
              variant="text"
              sx={{ color: "#2a48a4" }}
              component={Link}
              to="/"
            >
              Home
            </NavButton>
          </NavbarTitleLinks> */}
          <AccessTimeIcon />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "red",
              width: "10%",
            }}
          >
            <p>
              <b>DELIVERY</b>
              WITHIN 42 HOURS
            </p>
          </div>

          <DrawerButton
            onClick={() => setOpenDrawer((curr) => !curr)}
            isScrolled={isScrolled}
          >
            {openDrawer ? <>&#10005;</> : <>&#8801;</>}
          </DrawerButton>
        </RightContainer>
        {openDrawer && (
          <MobileNavMenu>
            <NavButton
              variant="text"
              sx={{ color: "#2a48a4" }}
              component={Link}
              to="/"
              onClick={() => setOpenDrawer(false)}
            >
              Home
            </NavButton>
          </MobileNavMenu>
        )}
      </NavbarContainer>
    </BoxShadowContainer>
  );
};

export default Navbar;

import { React, useState } from "react";
import Navbar from "../components/Navbar";
import { SearchBackgroundImageDiv } from "../components/StyledComponents";
import styled from "styled-components";
import { Link } from "react-scroll";

const Home = () => {
  const types = ["Mobiles", "Computers", "Watches", "Sports"];
  const [active, setActive] = useState(types[0]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "red",
        height: "100%",
      }}
    >
      <Navbar />
      <SearchBackgroundImageDiv>
        <p style={{ fontSize: "20px", color: "white" }}>This is home Page!</p>
      </SearchBackgroundImageDiv>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          backgroundColor: "#143a51",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: "white" }}>Category</h1>
        {types.map((type) => (
          <Link
            activeClass="active"
            to={type}
            spy={true}
            smooth={true}
            offset={-85}
          >
            <Tab
              key={type}
              active={active === type}
              onClick={() => setActive(type)}
            >
              {type}
            </Tab>
          </Link>
        ))}
      </div>
    </div>
  );
};

const Tab = styled.button`
  /* padding: 50%; */
  height: 6rem;
  font-size: 23px;
  cursor: pointer;
  opacity: 0.6;
  background: #143a51;
  color: white;
  border: 0;
  outline: 0;
  border-bottom: 2px solid transparent;
  transition: ease border-bottom 250ms;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid white;
    opacity: 1;
  `}
`;

export default Home;

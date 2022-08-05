import React from "react";
import styled from "styled-components";
import Watch2 from "../assets/images/watch2.jpg";
import Button from "@mui/material/Button";

const Card = ({ DummyData }) => {
  return (
    <MainColDiv>
      <ProductImage src={DummyData.ImagePath} />
      <InfoContainer>
        <Button
          sx={{ height: "3rem", borderRadius: "0px" }}
          size="large"
          variant="contained"
        >
          Add to cart
        </Button>
        <InfoText2>{DummyData.ProductName}</InfoText2>
        <PriceText cut>{DummyData.DiscountPrice}</PriceText>
        <PriceText>
          <s>{DummyData.RealPrice}</s>
        </PriceText>
      </InfoContainer>
    </MainColDiv>
  );
};

const MainColDiv = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: blue; */
  width: 35rem;
  height: 50%;
`;

const ProductImage = styled.img`
  height: 20rem;
  width: 35rem;
`;
const InfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  /* background-color: pink; */
  height: 5rem;
`;

const InfoText2 = styled.h2``;
const PriceText = styled.p`
  color: ${(props) => {
    return props.cut ? "red" : "grey";
  }};
  font-size: ${(props) => {
    return props.cut ? "20px" : "18px";
  }};
`;

export default Card;

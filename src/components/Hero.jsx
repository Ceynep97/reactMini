import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import Test from "./Test";

export default function Hero() {
  const Section = styled.div({
    height: " 100vh",
    scrollSnapAlign: "center",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  });
  const Container = styled.div({
    height: " 100vh",
    scrollSnapAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });
  const Left = styled.div({
    flex: "2",
    display: "flex",
    flexDirection: "column",
    gap: "50px",
    marginLeft: "150px",
  });
  const Right = styled.div({
    flex: "3",
  });
  const Title = styled.div({
    fontSize: "74px",
  });
  const WhatWeDo = styled.div({
    display: "flex",
    alignItems: "center",
    gap: "10px",
  });
  const Subtitle = styled.div({});
  const Descr = styled.div({ fontStyle: "italic" });

  return (
    <Section>
      <NavBar />
      <Container>
        <Left>
          <Title>Here it is the Title.</Title>
          <WhatWeDo>
            <p>-</p>
            <Subtitle>What We Do?</Subtitle>
          </WhatWeDo>
          <Descr>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Descr>
          <button class="btn" style={{ width: "120px" }}>
            Sign Up
          </button>
        </Left>
        <Right>
          <Test />
        </Right>
      </Container>
    </Section>
  );
}

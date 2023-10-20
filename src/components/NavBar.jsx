import React from "react";
import styled from "styled-components";
import "./style.css";
import Logo1 from "../components/ZEYNEP.png";

export default function NavBar() {
  const Section = styled.div({
    display: "flex",
    justifyContent: "center",
  });
  const Container = styled.div({
    width: "1400px",
    display: "flex",
    justifyContent: "space-between",
    height: "70px",
  });
  const Links = styled.div({
    display: "flex",
    alignItems: "center",
    gap: "20px",
  });
  const Logo = styled.div({
    backgroundImage: `url(${Logo1})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    width: "70px",
    height: "70px",
    marginTop: "5px",
  });
  const List = styled.ul({
    display: "flex",
    gap: "20px",
    listStyle: "none",
  });
  const ListItem = styled.li({
    fontSize: "22px",
  });
  const Icons = styled.div({
    display: "flex",
    alignItems: "center",
    gap: "20px",
  });

  return (
    <Section>
      <Container>
        <Links>
          <Logo />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Works</ListItem>
          </List>
        </Links>
        <Icons>
          <div class="input-wrapper">
            <button class="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                height="25px"
                width="25px"
              >
                <path
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  stroke-width="1.5"
                  stroke="#fff"
                  d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                ></path>
                <path
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  stroke-width="1.5"
                  stroke="#fff"
                  d="M22 22L20 20"
                ></path>
              </svg>
            </button>
            <input class="input" name="text" type="text" />
          </div>
          <button class="btn">Sign Up</button>
        </Icons>
      </Container>
    </Section>
  );
}

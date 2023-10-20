import Hero from "./components/Hero";
import OurWorks from "./components/OurWorks";
import WhoWeAre from "./components/WhoWeAre";
import styled from "styled-components";
import backgroundImage from "./bg.jpeg";

function App() {
  const Container = styled.div({
    height: " 100vh",
    scrollSnapType: "y mandatory",
    scrollBehavior: "smooth",
    overflowY: "auto",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: "no repeat",
    backgroundSize: "cover",
    color: "white",
  });
  return (
    <Container>
      <Hero />
      <WhoWeAre />
      <OurWorks />
    </Container>
  );
}

export default App;

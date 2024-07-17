import styled from "styled-components";
import NavBarCompoent from "./navBar";
import HomePage from "./homepage";
import OurTeamComponent from "./ourteam";
import Contactus from "./contactus";
import VideoPageCompoent from "./testtemp";
import OurServiceCompoent from "./ourservic";

const MainPageCompoennt = () => {
  // document.body.style.backgroundColor = "#232B2B";
  return (
    <StyledHome>
      <NavBarCompoent />
      <VideoPageCompoent />
      <OurServiceCompoent />
      <HomePage />
      <OurTeamComponent />
      {/* <Contactus /> */}
    </StyledHome>
  );
};
const StyledHome = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  //   background:black;
  background: rgb(30, 148, 165);

  background: linear-gradient(
    90deg,
    rgb(30, 148, 165) ; 14%,
    hsla(178, 59%, 37%, 1) 62%
  );

  background: -moz-linear-gradient(
    90deg,
    rgb(30, 148, 165) ; 14%,
    hsla(178, 59%, 37%, 1) 62%
  );

  background: -webkit-linear-gradient(
    90deg,
    rgb(30, 148, 165) ; 14%,
    hsla(178, 59%, 37%, 1) 62%
  );

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#1C85C7", endColorstr="#279591", GradientType=1 );
  position: relative;

  --header: 12vh;
  @media only screen and (max-width: 500px) {
    --header: 10vh;
  }
`;

export default MainPageCompoennt;

import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import logo from "../assets/logo.png"
const NavBarCompoent = () => {
    const navigate = useNavigate()
//   const dispatch = useDispatch()
    return ( 
        <StyledHeader>
      <picture className="logo" >
        {/* <source srcSet={shortLogo} media="(max-width:500px)" /> */}
        {/* <source srcSet={iicheLogo} /> */}
        <img src={logo} alt="iichelogo" />
      </picture>
      <nav>
        {/* {type === "HOME" && ( */}
          <ul>
            <li>
              <a href="/reportHistory">HISTORY</a> 
            </li>
            <li>
              <a href="/doctorList">BOOK APPOINTMENT</a> 
            </li>
            <li>
              <a href="#ourteam">OUR TEAM</a>
            </li>
            <li>
              <a href="#contact">CONTACT US</a>
            </li>
            <li>
              <a href="#profile">PROFILE</a>
            </li>
          </ul>
        {/* )} */}
        {/* {!(type === "DASHBOARD") && (
          <Link to="/register"> */}
            <a  href="/taketest" className="button">Take Test</a>
          {/* </Link> */}
        {/* )} */}
        {/* {type === "DASHBOARD" && ( */}
          {/* <> */}
            {/* <a
              href="https://www.canva.com/design/DAE_SfBGQCw/w4GtSPNXtspSdko2zscf9g/view?utm_content=DAE_SfBGQCw&utm_campaign=designshare&utm_medium=link&utm_source=publishpresent"
              target="_blank"
              rel="noreferrer"
            >
              <button>Rulebook</button>
            </a> */}
            {/* <button type="button" > */}
              {/* Logout */}
            {/* </button> */}
          {/* </> */}
        {/* )} */}
      </nav>
    </StyledHeader>
     );
}
 
const StyledHeader = styled.header`
  width: 100%;
  height: 8.5vh;
  padding: calc(var(--padding) / 2) var(--padding);

  position: relative;
  z-index: 2;

  display: flex;
  justify-content: space-between;
  align-items: center;

  

  overflow: hidden;
  background:white;
  
  .logo {
    display: inline-block;
    height: 100%;
    overflow: hidden;
    background:whitesmoke;
    border-radius:60%;
    
    object-fit: cover;
    cursor: pointer;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  nav {
    display: flex;
    align-items: center;
    ul {
      display: flex;
      gap: var(--padding);
      li {
        font-size: clamp(0.8rem, 2vw, 1rem);
        color: #fff;
        color:black;
        cursor: pointer;
        transition: transform ease-out 200ms;
        &:hover {
          transform: scale(1.2);
        }
      }
      
      @media only screen and (max-width: 500px) {
        display: none;
      }
    }
    
    .button {
      margin-left: calc(2 * var(--padding));
      font-size: clamp(0.7rem, 1.5vw, 0.9rem);
      padding: calc(var(--padding) / 4);
      border-radius: 5px;
      background: rgb(30,148,165);
      // color: #000;
      color:black;
      transition: all ease-in-out 200ms;
      position: relative;
      // border:0.7px solid black;
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: calc(-1 * var(--padding));
        display: block;
        
        width: 2px;
        height: 70%;
        background: #fff;
        color:white;
        transform: translateY(-50%);
      }
      &:hover {
        color:black;
        // background:black;
        background:#9be5aa;
      }
    }
    
    a button::before {
      display: none;
    }
  }

  @media only screen and (max-width: 500px) {
    .logo {
      height: 90%;
    }
    
    nav {
      ul {
        display: none;
      }
    }
  }
`
export default NavBarCompoent;
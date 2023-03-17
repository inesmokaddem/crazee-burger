import styled from "styled-components";
import NavbarRigthSide from "./NavbarRigthSide";

export default function Navbar({username}) {
  return (
    <NavbarStyled>
        <div className="left-side">left</div>
        <NavbarRigthSide username={username}/>
    </NavbarStyled>
  )
}

const NavbarStyled = styled.nav`
    background: blue;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
`;
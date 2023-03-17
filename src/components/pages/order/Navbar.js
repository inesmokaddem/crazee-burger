import styled from "styled-components";
import NavbarRigthSide from "./NavbarRigthSide";
import Logo from "../../reusable-ui/Logo"
export default function Navbar({username}) {
  return (
    <NavbarStyled>
        <Logo/>
        <NavbarRigthSide username={username}/>
    </NavbarStyled>
  )
}

const NavbarStyled = styled.nav`
    background: blue;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    /* align-items: center; */
`;
import styled from "styled-components";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import Profile from "./Profile";

export default function NavbarRigthSide({username}) {
  return (
    <NavbarRightSideStyled className="right-side">
      <ToggleButton/>
      <Profile username={username}/>
    </NavbarRightSideStyled>
  )
}
const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;

  /* .admin-button {
    background: lightgray;
  } */

`;
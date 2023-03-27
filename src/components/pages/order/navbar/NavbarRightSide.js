import styled from "styled-components";
import AdminButton from "./AdminButton";
import Profile from "./Profile";

export default function NavbarRigthSide({username}) {
  return (
    <NavbarRightSideStyled className="right-side">
      <AdminButton/>
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
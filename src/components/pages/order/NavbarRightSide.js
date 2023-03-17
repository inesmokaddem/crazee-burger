import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NavbarRigthSide({username}) {
  return (
    <NavbarRightSideStyled className="right-side">
        <div className="navbar-button">Admin button</div>
        <h1>Hey, { username }</h1>
        <div className="profile">
          <Link to="/">
              <button>Se déconnecter</button>
          </Link>
        </div>
    </NavbarRightSideStyled>
  )
}
const NavbarRightSideStyled = styled.div`
  background: purple;

  .admin-button {
    background: lightgray;
  }

`;
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NavbarRigthSide({username}) {
  return (
    <NavbarRigthSideStylde>
        Right
        <h1>Hey, { username }</h1>
        <Link to="/">
            <button>Se déconnecter</button>
        </Link>
    </NavbarRigthSideStylde>
  )
}
const NavbarRigthSideStylde = styled.div`
        background: purple;
`;
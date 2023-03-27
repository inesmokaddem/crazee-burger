import { ToastContainer, toast } from 'react-toastify';
import styled from "styled-components";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import Profile from "./Profile";

import 'react-toastify/dist/ReactToastify.css';

export default function NavbarRigthSide({username}) {
  const displayToastNotification = () => toast.info("Mode admin activé", {
    // icon: <FaUserSecret size={30} />,
    theme: "dark",
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })

  return (
    <NavbarRightSideStyled className="right-side">
      <ToggleButton 
        labelIfChecked="Désactiver le mode admin" 
        labelIfUnchecked="Activer le mode admin"
        onToggle={displayToastNotification}
      />
      <ToastContainer className="toaster" bodyClassName="body-toast" />
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
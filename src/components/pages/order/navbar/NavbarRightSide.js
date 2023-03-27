
import styled from "styled-components";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import Profile from "./Profile";
import { useState } from "react"
import ToastAdmin from "./ToastAdmin";
import { toast } from "react-toastify";


export default function NavbarRigthSide({username}) {

  const [isModeAdmin, setIsModeAdmin] = useState(false);

  const displayToastNotification = () => {
    if (!isModeAdmin) {
      toast.info("Mode admin activé", {
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
    }
    setIsModeAdmin(!isModeAdmin)
  }

  return (
    <NavbarRightSideStyled className="right-side">
      <ToggleButton 
        labelIfChecked="Désactiver le mode admin" 
        labelIfUnchecked="Activer le mode admin"
        onToggle={displayToastNotification}
      />
      <ToastAdmin/>
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
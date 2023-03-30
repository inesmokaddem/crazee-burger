
import styled from "styled-components";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import Profile from "./Profile";
import { useState } from "react"
import ToastAdmin from "./ToastAdmin";
import { toast } from "react-toastify";


export default function RigthSide() {

  const [isModeAdmin, setisModeAdmin] = useState(false);

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
    setisModeAdmin(!isModeAdmin)
  }

  return (
    <NavbarRightSideStyled className="right-side">
      <ToggleButton 
        isChecked={isModeAdmin}
        labelIfChecked="Désactiver le mode admin" 
        labelIfUnchecked="Activer le mode admin"
        onToggle={displayToastNotification}
      />
      <ToastAdmin/>
      <Profile/>
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
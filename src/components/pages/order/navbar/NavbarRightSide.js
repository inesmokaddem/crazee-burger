
import styled from "styled-components";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import Profile from "./Profile";
import ToastAdmin from "./ToastAdmin";
import { toast } from "react-toastify";
import OrderContext from "../../../../context/OrderContext";
import { useContext } from "react";


export default function RigthSide() {

  const {isModeAdmin, setIsModeAdmin} = useContext(OrderContext);

  const displayToastNotification = () => {
    if (!isModeAdmin) {
      toast.info("Mode admin activé", {
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

`;
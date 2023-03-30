import { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../context/OrderContext";
import { theme } from "../../../../theme";
import AdminBloc from "./Admin/AdminBloc";
import Menu from "./Menu";

export default function Main() {

  const {isModeAdmin, setIsModeAdmin} = useContext(OrderContext);
  return (
    <MainStyled>
      {/* <div className="basket">basket</div> */}
      <div className="menu-admin-bloc">
        <Menu/>
        {isModeAdmin && <AdminBloc/>}
      </div>

    </MainStyled>
  ) 


}
const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  flex: 1;
  height: calc(95vh - 10vh);

  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  display: grid;
  grid-template-columns: 25% 1fr;
  grid-template-columns: 1fr;

  /* overflow-y: scroll; */

  .basket {
    border: 1px solid red;
  }
  .menu-admin-bloc {
    overflow-y: hidden;
    display: grid;
    position: relative;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
  }

`;
import { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";
import { theme } from "../../../../../../theme";
import { getTabSelected, getTabsConfig } from "../configTabs";
import { EMPTY_PRODUCT } from "../../../../../../enums/product";

export default function AdminPanel() {
  const { currentTabSelected, productSelected } = useContext(OrderContext) 

  const hasAlreadyBeenClicked = productSelected !== EMPTY_PRODUCT
  const tabs = getTabsConfig(hasAlreadyBeenClicked)
  const tabSelected = getTabSelected(tabs, currentTabSelected)
  return (
    <AdminPanelStyled>
        {tabSelected && tabSelected.Content}
    </AdminPanelStyled>
  )
}

const AdminPanelStyled = styled.div`
      height: 240px;
      padding-left: 20px;
      background: ${theme.colors.white};
      border-top: 1px solid ${theme.colors.greyLight};
      box-shadow: ${theme.shadows.subtle};
      padding: 30px 5%;
      box-sizing: border-box;
`;

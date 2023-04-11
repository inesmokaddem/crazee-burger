import { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";
import { theme } from "../../../../../../theme";
import { getTabSelected, tabsConfig } from "../tabsConfig";

export default function AdminPanel() {
  const { currentTabSelected } = useContext(OrderContext) 
  const tabs = tabsConfig
  const tabSelected = getTabSelected(tabs, currentTabSelected)
  return (
    <AdminPanelStyled>
        <p>{tabSelected && tabSelected.label}</p>
    </AdminPanelStyled>
  )
}

const AdminPanelStyled = styled.div`
      height: 250px;
      padding-left: 20px;
      background: ${theme.colors.white};
      border-top: 1px solid ${theme.colors.greyLight};
      box-shadow: ${theme.shadows.subtle};
`;

import { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import { theme } from "../../../../../theme";
import { getSelectedTab, TabsLibrary } from "./TabsLibrary";

export default function AdminPanel() {
  const { currentSelectedTab } = useContext(OrderContext) 
  const tabs = TabsLibrary
  const selectedTab = getSelectedTab(tabs, currentSelectedTab)
  return (
    <AdminPanelStyled>
        <h3>{selectedTab && selectedTab.label}</h3>
    </AdminPanelStyled>
  )
}

const AdminPanelStyled = styled.div`
      height: 250px;
      background: ${theme.colors.white};
      border-top: 1px solid ${theme.colors.greyLight};
      box-shadow: ${theme.shadows.subtle};
`;

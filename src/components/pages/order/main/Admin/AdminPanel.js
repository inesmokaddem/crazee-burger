import { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import { theme } from "../../../../../theme";
import { getTabSelected, TabsLibrary } from "./TabsLibrary";

export default function AdminPanel() {
  const { currentTabSelected } = useContext(OrderContext) 
  const tabs = TabsLibrary
  const TabSelected = getTabSelected(tabs, currentTabSelected)
  return (
    <AdminPanelStyled>
        <h3>{TabSelected && TabSelected.label}</h3>
    </AdminPanelStyled>
  )
}

const AdminPanelStyled = styled.div`
      height: 250px;
      background: ${theme.colors.white};
      border-top: 1px solid ${theme.colors.greyLight};
      box-shadow: ${theme.shadows.subtle};
`;

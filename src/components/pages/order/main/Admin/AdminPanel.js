import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function AdminPanel() {
  return (
    <AdminPanelStyled>
        Ajouter un produit
    </AdminPanelStyled>
  )
}

const AdminPanelStyled = styled.div`
      height: 250px;
      background: ${theme.colors.white};
      border-top: 1px solid ${theme.colors.greyLight};
      box-shadow: ${theme.shadows.subtle};
`;

import styled from "styled-components";
import { theme } from "../../../../../theme";
import AdminTabs from "./AdminTabs";

export default function AdminBloc() {
  return (
    <AdminBlocStyled>
      <AdminTabs/>
      <div className="admin-panel">
        Ajouter un produit
      </div>
    </AdminBlocStyled>
  )
}

const AdminBlocStyled = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    .admin-panel {
      height: 250px;
      background: ${theme.colors.white};
      border-top: 1px solid ${theme.colors.greyLight};
      box-shadow: ${theme.shadows.subtle};
    }

`;
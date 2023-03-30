import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function AdminBloc() {
  return (
    <AdminBlocStyled>Admin bloc</AdminBlocStyled>
  )
}

const AdminBlocStyled = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    height: 250px;
    background: ${theme.colors.white};
    border-top: 1px solid ${theme.colors.greyLight};
    box-shadow: ${theme.shadows.subtle};
`;
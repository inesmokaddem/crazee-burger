import styled from "styled-components";
import { theme } from "../../../../../theme";
import Tab from "../../../../reusable-ui/Tab";

export default function AdminTabs() {
  return (
    <AdminTabsStyled>
        <Tab/>
    </AdminTabsStyled>
  )
}

const AdminTabsStyled = styled.div`
    display: flex;
    color: ${theme.colors.greySemiDark};
    margin-left: 70px;
`;
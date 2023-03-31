import { useState } from "react";
import styled from "styled-components";
import AdminPanel from "./AdminPanel";
import AdminTabs from "./AdminTabs";

export default function AdminBloc() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <AdminBlocStyled>
      <AdminTabs isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      {!isCollapsed && <AdminPanel/>}
    </AdminBlocStyled>
  )
}

const AdminBlocStyled = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
`;
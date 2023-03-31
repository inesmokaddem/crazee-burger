import { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import AdminPanel from "./AdminPanel";
import AdminTabs from "./AdminTabs";

export default function AdminBloc() {
  const {isCollapsed} = useContext(OrderContext);
  return (
    <AdminBlocStyled>
      <AdminTabs />
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
import styled from "styled-components";
import AdminPanel from "./AdminPanel";
import Tab from "../../../../reusable-ui/Tab" 

export default function AdminBloc() {
  return (
    <AdminBlocStyled>
      <Tab/>
      <AdminPanel/>
    </AdminBlocStyled>
  )
}

const AdminBlocStyled = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
`;
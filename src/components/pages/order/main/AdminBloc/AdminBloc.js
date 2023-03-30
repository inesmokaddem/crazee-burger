import styled from "styled-components";

export default function AdminBloc() {
  return (
    <AdminBlocStyled>Admin bloc</AdminBlocStyled>
  )
}

const AdminBlocStyled = styled.div`
    background: green;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    height: 250px;
`;
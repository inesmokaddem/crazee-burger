import styled from "styled-components";
import { fakeMenu1 } from "../../../data/fakeMenu";
import { theme } from "../../../theme";
import MenuCard from "./MenuCard";

export default function Main() {
  return <MainStyled>
    <div className="basket">basket</div>
    {/* {fakeMenu1.map(product => (
      <MenuCard key={product.id} product={product}></MenuCard>
    ))} */}
    <MenuCard/>
  </MainStyled>

}
const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  flex: 1;

  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  display: grid;
  grid-template-columns: 1fr;
  overflow-y: scroll;

  .basket {
    border: 1px solid red;
  }
`;
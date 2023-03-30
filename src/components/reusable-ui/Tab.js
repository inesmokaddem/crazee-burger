import styled from "styled-components";
// import {AiOutlinePlus} from "react-icons/ai"
// import {MdModeEditOutline} from "react-icons/md"
import {FiChevronDown} from "react-icons/fi"
import { theme } from "../../theme";


export default function Tab() {
  return (
    <TabStyled>
        <button className="toggle-button"><FiChevronDown/></button>
        {/* <div className="tab">
            <AiOutlinePlus/> Ajouter un produit
        </div>
        <div className="tab">
            <MdModeEditOutline/> Modifier un produit
        </div> */}
    </TabStyled>

  )
}

const TabStyled = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 20px;
    gap: 13.02px;

    background: ${theme.colors.white};
    border-width: 1px 1px 2px 1px;
    border-style: solid;
    border-color: ${theme.colors.greyLight};
    box-shadow: ${theme.shadows.subtle};
    border-radius: ${theme.borderRadius.round};

    cursor: pointer;

    .toggle-button{
        background: ${theme.colors.white};
        color: ${theme.colors.greySemiDark};
        border: none;
    }
`;
import styled from "styled-components";
import { theme } from "../../../../../theme";
import Tab from "../../../../reusable-ui/Tab";

import {AiOutlinePlus} from "react-icons/ai"
import {MdModeEditOutline} from "react-icons/md"
import {FiChevronDown, FiChevronUp} from "react-icons/fi"

export default function AdminTabs({isCollapsed, setIsCollapsed}) {

  return (
    <AdminTabsStyled>
        <Tab Icon={isCollapsed ? <FiChevronUp/> : <FiChevronDown/>} label="" onClick={() => setIsCollapsed(!isCollapsed)} className={isCollapsed ? "is-active" : ""} />
        <Tab Icon={<AiOutlinePlus/>} label="Ajouter un produit" />
        <Tab Icon={<MdModeEditOutline/>} label="Modifier un produit" />
    </AdminTabsStyled>
  )
}

const AdminTabsStyled = styled.div`
    display: flex;
    /* color: ${theme.colors.greySemiDark}; */
    /* margin-left: 70px; */
    padding: 0 20px;

    button {
        margin-left: 1px;
    }
    .is-active {
        background: ${theme.colors.dark};
        color: ${theme.colors.white};
        border-color: ${theme.colors.dark};
    }
`;
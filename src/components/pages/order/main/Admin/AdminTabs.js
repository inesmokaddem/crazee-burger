import styled from "styled-components";
import { theme } from "../../../../../theme";
import Tab from "../../../../reusable-ui/Tab";
import {FiChevronDown, FiChevronUp} from "react-icons/fi"
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { tabsConfig } from "./TabsConfig";

export default function AdminTabs() {
  // state
  const {isCollapsed, setIsCollapsed, currentTabSelected, setcurrentTabSelected} = useContext(OrderContext)
  // comportements 
  const selectTab = (tabSelected) => {
    setIsCollapsed(false)
    setcurrentTabSelected(tabSelected)
  }

  const tabs = tabsConfig

  return (
    <AdminTabsStyled>
        <Tab 
          index="chevron"
          Icon={isCollapsed ? <FiChevronUp/> : <FiChevronDown/>} 
          label=""
          className={isCollapsed ? "is-active" : ""} 
          onClick={() => setIsCollapsed(!isCollapsed)}
        />
        {tabs.map(({index, label, Icon }) => (
          <Tab
            key={index}
            index={index}
            label={label}
            Icon={Icon}
            onClick={() => selectTab(index)}
            className={currentTabSelected === index ? "is-active" : ""}
          />
        ))}

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
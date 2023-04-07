import styled from "styled-components";
import { theme } from "../../../../../theme";
import Tab from "../../../../reusable-ui/Tab";
import {FiChevronDown, FiChevronUp} from "react-icons/fi"
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { TabsConfig } from "./TabsConfig";

export default function AdminTabs() {
  // state
  const {isCollapsed, setIsCollapsed, currentTabSelected, setcurrentTabSelected} = useContext(OrderContext)
  // comportements 
  const selectTab = (TabSelected) => {
    setIsCollapsed(false)
    setcurrentTabSelected(TabSelected)
  }

  const tabs = TabsConfig

  return (
    <AdminTabsStyled>
        <Tab 
          index="chevron"
          Icon={isCollapsed ? <FiChevronUp/> : <FiChevronDown/>} 
          label=""
          className={isCollapsed ? "is-active" : ""} 
          onClick={() => setIsCollapsed(!isCollapsed)}
        />
        {tabs.map((tab) => (
          <Tab
            key={tab.index}
            index={tab.index}
            label={tab.label}
            Icon={tab.Icon}
            onClick={() => selectTab(tab.index)}
            className={currentTabSelected === tab.index ? "is-active" : ""}
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
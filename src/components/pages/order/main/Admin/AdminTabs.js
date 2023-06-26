import styled from "styled-components";
import { theme } from "../../../../../theme";
import Tab from "../../../../reusable-ui/Tab";
import {FiChevronDown, FiChevronUp} from "react-icons/fi"
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { getTabsConfig } from "./configTabs";

export default function AdminTabs() {
  // state
  const {isCollapsed, setIsCollapsed, currentTabSelected, setCurrentTabSelected} = useContext(OrderContext)
  // comportements 
  const selectTab = (tabSelected) => {
    setIsCollapsed(false)
    setCurrentTabSelected(tabSelected)
  }

  const tabs = getTabsConfig()

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
      &:hover {
        border-bottom: 2px solid ${theme.colors.white};
        text-decoration: underline;
      }
    }
    .is-active {
        background: ${theme.colors.dark};
        color: ${theme.colors.white};
        border-color: ${theme.colors.dark};
      &:hover {
        border-bottom: 2px solid ${theme.colors.dark};;
        text-decoration: underline;
      }
    }

`;
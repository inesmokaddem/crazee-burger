import styled from "styled-components";
import { theme } from "../../theme";


export default function Tab({Icon, label, onClick, className }) {
  return (
    <TabStyled onClick={onClick} className={className}>
        <div className="icon">{Icon}</div>
        { label && <div className="label">{label}</div> }
        
    </TabStyled>

  )
}

const TabStyled = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 22px;
    height: 43px;

    position: relative;
    left: 5%;
    top: 1px;

    background: ${theme.colors.white};
    box-shadow: ${theme.shadows.subtle};

    // border
    border-style: solid;
    border-width: 1px 1px 2px 1px;
    border-color: ${theme.colors.greyLight};
    
    // border radius
    border-radius: ${theme.borderRadius.round};
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;

    cursor: pointer;

    // fonts
    color: ${theme.colors.greySemiDark};
    font-size: ${theme.fonts.size.P0};

    :hover {
        .label {
            text-decoration: underline;
        }
    }

    .icon {
        display: flex;
    }

    .label {
        margin-left: 13px;
    }
`;
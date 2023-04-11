import styled from "styled-components";
import { theme } from "../../theme";

export default function TextInput({ value, onChange, Icon, ...extraProps }) { // props // destructuring de props, ...restProps est un objet qui contient en propriétés placeholder de valeur "entrez votre prénom", required de valeur true ou false. 
  return (
    <InputStyled>
        {Icon && Icon}
        <input value={value} onChange={onChange} type="text" {...extraProps} />
    </InputStyled>
  )
}

const InputStyled = styled.div`
    background-color: ${theme.colors.white};
    border-radius: ${theme.borderRadius.round};
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;

    .icon {
        font-size: 15px;
        margin-right: 8px;
        color: ${theme.colors.greySemiDark};
        min-width: 1em; // that way, the icon size is NOT affected
    }
    input {
        border: none;
        font-size: ${theme.fonts.size.SM};
        color: ${theme.colors.dark};
        width: 100%;
        /* display: flex; */

        &::placeholder {
            background: ${theme.colors.white};
            color: ${theme.colors.greyMedium};
        }
    }
`;
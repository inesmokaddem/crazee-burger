import styled from "styled-components";

export default function TextInput({ value, onChange, Icon, ...extraProps }) { // props // destructuring de props, ...restProps est un objet qui contient en propriétés placeholder de valeur "entrez votre prénom", required de valeur true ou false. 
  return (
    <InputStyled>
        {Icon && Icon}
        <input onChange={onChange} type="text" {...extraProps} />
    </InputStyled>
  )
}

const InputStyled = styled.div`
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;

    .icon {
        font-size: 15px;
        margin-right: 8px;
        color: #93a2b1;
        min-width: 1em; // that way, the icon size is NOT affected
    }
    input {
        border: none;
        font-size: 15px;
        color: #17161a;
        width: 100%;
        /* display: flex; */
    }

    &::placeholder {
        background: white;
        color: lightgrey;
    }
`;
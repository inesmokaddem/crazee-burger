import { theme } from "../../../../../../../theme"
import React from 'react'
import styled from 'styled-components';
import { HiCursorClick } from "react-icons/hi"

export default function HintMessage() {
  return (
    <HintMessageStyled>
        <span>Cliquer sur un produit du menu pour le modifier</span>
        <HiCursorClick/>
    </HintMessageStyled>
  )
}

const HintMessageStyled = styled.div`
    display: flex;
    align-items: center;
    font-family: ${theme.fonts.families.stylish};
    font-size: ${theme.fonts.size.P3};
    color: ${theme.colors.greyBlue};
    position: relative;
    top: 50px;

    span {
        margin-right: 10px;
    }
`;
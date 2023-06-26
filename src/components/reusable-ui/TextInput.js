import React from "react"
import styled, { css } from "styled-components"
import { theme } from "../../theme"

const TextInput = React.forwardRef(
  ({ onChange, Icon, className, variant = "normal", ...extraProps }, ref) => {
    return (
      <TextInputStyled className={className} variant={variant}>
        {Icon &&  <div className="icon">{Icon}</div>}
        <input ref={ref} onChange={onChange} type="text" {...extraProps} />
      </TextInputStyled>
    )
  }
)

export default TextInput
const TextInputStyled = styled.div`
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;

  .icon {
    font-size: ${theme.fonts.size.SM};
    margin: 0 13px 0 8px;
    display: flex; 
  }

  input {
    border: none;
    font-size: ${theme.fonts.size.SM};
    width: 100%;

    &::placeholder {
      color: ${theme.colors.greyMedium};
    }
  }

  ${({ variant }) => extraStyle[variant]}
`

const normalStyle = css`
  background-color: ${theme.colors.white};
  padding: 18px 28px;
  color: ${theme.colors.greySemiDark};

  input {
    color: ${theme.colors.dark};

    &::placeholder {
      background: ${theme.colors.white};
    }
  }
`

const minimalistStyle = css`
  background-color: ${theme.colors.background_white};
  padding: 8px 16px;
  color: ${theme.colors.greyBlue};

  input {
    background: ${theme.colors.background_white}; ////+
    color: ${theme.colors.dark};

    &:focus {
      outline: 0; //// add outline
    }
  }
`

const extraStyle = {
  normal: normalStyle,
  minimalist: minimalistStyle,
}

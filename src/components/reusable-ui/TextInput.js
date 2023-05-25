import styled, { css } from "styled-components"
import { theme } from "../../theme"

export default function TextInput({
  onChange,
  Icon,
  className,
  variant = "normal",
  ...extraProps
}) {
  return (
    <TextInputStyled className={className} variant={variant}>
      {Icon && <div className="icon">{Icon}</div>}
      <input onChange={onChange} type="text" {...extraProps} />
    </TextInputStyled>
  )
}

const TextInputStyled = styled.div`
  ${(props) => {
    if (props.variant === "normal") return getNormalStyle()
    if (props.variant === "minimalist") return getMinimalistStyle()
  }}
`

const getNormalStyle = () => {
  return css`
    background-color: ${theme.colors.white};
    border-radius: ${theme.borderRadius.round};
    display: flex;
    align-items: center;
    padding: 18px 28px;
    color: ${theme.colors.greySemiDark};

    .icon {
      font-size: ${theme.fonts.size.SM};
      margin: 0 13px 0 8px;
    }

    input {
      border: none;
      font-size: ${theme.fonts.size.SM};
      color: ${theme.colors.dark};
      width: 100%;

      &::placeholder {
        background: ${theme.colors.white};
        color: ${theme.colors.greyMedium};
      }
    }
  `
}

const getMinimalistStyle = () => {
  return css`
    background-color: ${theme.colors.background_white};
    border-radius: ${theme.borderRadius.round};
    display: flex;
    align-items: center;
    padding: 8px 16px;
    color: ${theme.colors.greyBlue};

    .icon {
      font-size: ${theme.fonts.size.SM};
      margin: 0 13px 0 8px;
    }

    input {
      border: none;
      background: ${theme.colors.background_white}; ////+
      font-size: ${theme.fonts.size.SM};
      color: ${theme.colors.dark};
      width: 100%;

      &::placeholder {
        color: ${theme.colors.greyMedium};
      }

      &:focus {
        outline: 0; //// add outline
      }
    }
  `
}

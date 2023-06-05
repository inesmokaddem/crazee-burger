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
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;

  .icon {
    font-size: ${theme.fonts.size.SM};
    margin: 0 13px 0 8px;
    display: flex; // to center icon vertically
  }

  input {
    border: none;
    font-size: ${theme.fonts.size.SM};
    width: 100%;

    &::placeholder {
      color: ${theme.colors.greyMedium};
    }
  }
  /* ${(props) => {
    if (props.variant === "normal") return normalStyle
    if (props.variant === "minimalist") return minimalistStyle
  }} */
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

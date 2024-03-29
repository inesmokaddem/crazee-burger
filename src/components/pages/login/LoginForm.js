import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { BsPersonCircle } from "react-icons/bs"
import { IoChevronForward } from "react-icons/io5"
import { theme } from '../../../theme'
import TextInput from '../../reusable-ui/TextInput'
import Button from '../../reusable-ui/Button'

export default function LoginForm() {
    // state
    const [inputValue, setInputValue] = useState("Inès")
    const navigate = useNavigate()

    // comportements
    const handleSubmit = (e) => {
        e.preventDefault()
        setInputValue("")
        navigate(`order/${inputValue}`)

    }
    const handleChange = (e) => { 
        setInputValue(e.target.value)
    }

    // render
    return (
        <div>
            <LoginFormStyled action="submit" onSubmit={handleSubmit}>
                <h1>Bienvenue chez nous !</h1>
                <hr/>
                <h2>Connectez-vous</h2>
                <div>
                    <TextInput 
                        value={inputValue}
                        onChange={handleChange} 
                        placeholder={"Entrez votre prénom"}
                        required
                        Icon={<BsPersonCircle />}
                        className="input-login"
                        variant="normal"
                    />
                    <Button 
                        label={"Accéder à mon espace"} 
                        Icon={<IoChevronForward />} 
                    />
                </div>
            </LoginFormStyled>
        </div>
    )
}

const LoginFormStyled = styled.form`
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 40px ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.round};
  font-family: ${theme.fonts.families.stylish};

  hr {
    border: 1.5px solid ${theme.colors.loginLine};
    margin-bottom: ${theme.gridUnit * 5}px;
  }

  h1 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P5};
  }

  h2 {
    margin: 20px 10px 10px;
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P4};
  }

  .input-login {
    margin: 18px 0;
  }
`;
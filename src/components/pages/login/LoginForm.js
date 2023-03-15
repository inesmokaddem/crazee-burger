import { React, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '../../../theme'

export default function LoginForm() {
    // state
    const [inputValue, setInputValue] = useState("")
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
                <br/>
                <h2>Connectez-vous</h2>
                <div>
                    <input 
                        value={inputValue} 
                        onChange={handleChange} 
                        type="text" 
                        placeholder='Entrez votre prénom' 
                        required />
                    <button>Accéder à mon espace</button>
                </div>
            </LoginFormStyled>
        </div>
    )
}

const LoginFormStyled = styled.div`
    background: blue;
`;
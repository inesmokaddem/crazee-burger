import { React, useState } from 'react'
import { Link } from 'react-router-dom'

export default function LoginForm() {
    // state
    const [inputValue, setInputValue] = useState("")

    // comportements
    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Bonjour ${inputValue}`)
        setInputValue("")

    }
    const handleChange = (e) => { 
        setInputValue(e.target.value)
    }

    // render
    return (
        <div>
            <h1>Bienvenue chez nous !</h1>
            <br/>
            <h2>Connectez-vous</h2>
            <form action="submit" onSubmit={handleSubmit}>
                <input 
                    value={inputValue} 
                    onChange={handleChange} 
                    type="text" 
                    placeholder='Entrez votre prénom...' 
                    required />
                <button>Accédez à votre espace</button>
                <Link to="/order">Vers OrderPage</Link>
            </form>
        </div>
    )
}

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "./AuthContext"

export default function LoginComponent() {

    const [username, setUsername] = useState('tejpal')
    const [password, setPassword] = useState('')

    const [getSuccess, setSuccess] = useState(false)
    const [getError, setError] = useState(false)

    const navigate = useNavigate()

    const authContext = useAuth()

    function handleUsernameChange(event) {
        setUsername(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }

    function handleSubmit() {
        if (username === 'tejpal' && password === '123') {
            authContext.setAuthenticated(true)
            setSuccess(true)
            setError(false)
            navigate(`/welcome/${username}`)
            // navigate('/welcome/tejpal')
        } else {
            setSuccess(false)
            setError(true)
        }
    }

    return (
        <div className="Login">
            {getSuccess && <div className='successMessage'>Authenticated Succesfully</div>}
            {getError && <div className='ErrorMessage'>Authenticated Failed. Please check your credentials.</div>}
            <div className="LoginForm">
                <div>
                    <label>UserName</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange} />
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>login</button>
                </div>
            </div>
        </div>
    )
}